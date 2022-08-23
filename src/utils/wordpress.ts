import { plainToClass } from 'class-transformer';
import _ from 'lodash';

import { GutenbergResourcesWrapper } from '~src/models/gutenberg/GutenbergResourcesWrapper';
import { GutenbergWrapper } from '~src/models/gutenberg/GutenbergWrapper';
import type { ModelCustomAd } from '~src/models/gutenberg/ModelCustomAd';
import type { IGutenberg } from '~src/models/interfaces/IGutenberg';
import { IShortcode } from '~src/models/interfaces/IShortcode';
import { ShortcodeWrapper } from '~/src/models/shortcode/ShortcodeWrapper';

import { arrayToObject, ObjectMap } from './miscellaneous';

export interface Block<D extends IGutenberg, R = unknown> {
	type: string;
	name: string;
	index?: any;
	dataRaw?: R;
	data?: D;
	html?: string;
}

export interface Shortcode<D extends IShortcode, R = unknown> {
	tag: string;
	source: string;
	result?: string;
	dataRaw?: R;
	data?: D;
}

export function filterGutenbergBlocks<D extends IGutenberg, R = unknown>(
	blocks: Block<D, R>[],
	type: string,
	name: string
) {
	return blocks.filter(it => it.type === type && it.name === name);
}

export function filterShortcodes<D extends IShortcode, R = unknown>(
	shortcodes: Shortcode<D, R>[],
	tag: string
) {
	return shortcodes.filter(it => it.tag === tag);
}

export function getGutenbergResourceClass(type: string) {
	return GutenbergResourcesWrapper.resources.find(Cls => {
		const instance = new Cls();
		return instance.__type === type;
	});
}

export function getGutenbergBlockClass(type: string, name: string) {
	return GutenbergWrapper.blocks.find(Cls => {
		const instance = new Cls();
		return instance.__type === type && instance.__name === name;
	});
}

export function getShortcodeClass(tag: string) {
	return ShortcodeWrapper.shortcodes.find(Cls => {
		const instance = new Cls();
		return instance.__tag === tag;
	});
}

export function extractWpBlocks<D extends IGutenberg, R = unknown>(
	html: string,
	meta?: WordPressMetaData
): Block<D, R>[] {
	// WP pattern to localize each block
	// Group 1: block type (e.g. wp)
	// Group 2: block name (e.g. paragraph)
	// Group 3: block data (json format)
	// Group 4: block html (e.g <p>...</p>)
	const pattern =
		/^<!-- (?!\/)(\S+):(\S+)[ ]?({.*})?[^>]+>(?:\n?\r?(.*)\n?\r?<!-- (?=\/)[^>]+>)?$/gm;

	// Group up all data results into blocks
	return [...html.matchAll(pattern)].map((it, i) => {
		const type = it[1];
		const name = it[2];
		const dataRaw = it[3] && JSON.parse(it[3]);
		const cls = getGutenbergBlockClass(type, name);
		const data = cls && plainToClass(cls, dataRaw);
		const html = it[4];
		const index = i;

		if (data) {
			data.__html = html;
			data.postBuild?.(meta);
		}

		return { type, name, dataRaw, data, html, index } as Block<D, R>;
	});
}

export function convertWpShortcode(
	html: string,
	meta?: WordPressMetaData,
	isAmp?: boolean
) {
	const shortcodes = _.compact(
		extractWpShortcode(html, meta).map(it => it.data)
	);

	let result = String(html);
	for (const shortcode of shortcodes) {
		if (shortcode.__source) {
			result = result.replace(
				shortcode.__source,
				shortcode.renderHtmlString(`${meta?.pageId || ''}`, isAmp)
			);
		}
	}

	return result;
}

export function extractWpShortcode<D extends IShortcode, R = unknown>(
	html: string,
	meta?: WordPressMetaData
): Shortcode<D, R>[] {
	// WP pattern to localize each shortcode
	// Group1: tag name (e.g. link-parceiro)
	// Group2: data raw string (e.g. foo='bar' foobar='laland')
	const patternToShortcode = /\[[ ]*([a-zA-z0-9-_]+)[ ]*(\S+=[^\]]*)*[ ]*]/gm;

	// Pattern to extract each data from data raw string
	// Group1: key
	// Group2: value
	const patternToData = /(\S+)='([^']*)'/g;

	// Group up all data results into shortcodes
	return [...html.matchAll(patternToShortcode)].map(sc => {
		const source = sc[0];
		const tag = sc[1];

		// Convert data raw into list data
		// e.g. foo='bar' foobar='laland' would be [{key: 'foo', value: 'bar'}, {key: 'foobar', value: 'laland' }]
		const listData =
			sc[2] !== undefined
				? [...sc[2].matchAll(patternToData)].map(dt => {
						const key = dt[1];
						const value = dt[2];

						return { key, value };
				  })
				: {};

		// Convert list data into object data
		const dataRaw = arrayToObject(listData as ObjectMap[]);

		const cls = getShortcodeClass(tag);
		const data = cls && plainToClass(cls, dataRaw);

		const result = data && html.replace(source, data.renderHtmlString());

		if (data) {
			data.__source = source;
			data.postBuild?.(meta);
		}

		return { tag, source, result, dataRaw, data } as Shortcode<D, R>;
	});
}

export function insertAds<D extends IGutenberg, R = unknown>(
	blocks: Block<D, R>[],
	model: ModelCustomAd
) {
	// maps indexes from each paragraph block
	let indexes: number[] = [];

	blocks.forEach((it, i) => {
		if (it.name === 'paragraph') indexes.push(i);
	});

	// adds ads according with config
	model.configAd?.content?.forEach(it => {
		const index = it.indexParagraph && indexes[it.indexParagraph];

		const inBlacklist = it.pageBlacklist?.includes(model.pageId ?? 0);

		if (index !== undefined && it.idBlock && !inBlacklist) {
			model.idBlock = model.idBlock
				? [...model?.idBlock, it.idBlock]
				: [it.idBlock];

			blocks.splice(index, 0, {
				type: model.__type,
				name: model.__name,
				data: model as any,
			});

			indexes = indexes.map(it => it + 1);
		}
	});
}
