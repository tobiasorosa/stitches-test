import { plainToClass } from 'class-transformer';
import { compact, uniq } from 'lodash';
import React from 'react';
import { GenericCallBlock } from '~/src/components/Gutenberg/GenericCallBlock';
import axiosT, {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

import { IGutenberg } from '~src/models/interfaces/IGutenberg';
import { addParamsToURL } from '~src/utils/addParamsToURL';
import {
	Block,
	extractWpBlocks,
	filterGutenbergBlocks,
	getGutenbergResourceClass,
} from '~src/utils/wordpress';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelGenericCallBlock implements IGutenberg {
	readonly __type = 'wp';
	readonly __name = 'cgb/generic-call-block';

	render() {
		return <GenericCallBlock data={this} />;
	}

	postBuild(meta?: WordPressMetaData) {
		// extract the pool of credit cards from meta data
		const cls = getGutenbergResourceClass(
			this.selectedProductTypeEnglish || ''
		);
		const pool = cls && plainToClass(cls, meta?.genericCallProducts ?? []);

		// find the corresponded credit card and inject it into creditCard field
		this.product = pool?.find(it => it.id === this.id);

		this.selectedProductName = this.product?.name ?? this.selectedProductName;
		this.selectedProductLink = this.processedLink;
		this.postId = `${meta?.pageId || ''}`;
	}

	@AxiosResponseExpose()
	mainTitle?: string;

	@AxiosResponseExpose()
	subtitle?: string;

	@AxiosResponseExpose()
	optionsLinkReview?: string;

	@AxiosResponseExpose()
	utmCheckBox?: boolean;

	@AxiosResponseExpose()
	selectedProduct?: string;

	selectedProductLink?: {
		href?: string;
		rel?: string;
	};

	@AxiosResponseExpose()
	selectedProductName?: string;

	@AxiosResponseExpose()
	selectedProductType?: string;

	@AxiosResponseExpose()
	selectedProductTypeEnglish?: string;

	@AxiosResponseExpose()
	selectProductOptions?: Record<string, Product[]>;

	// extracted from meta
	product?: any;

	postId?: string;

	get processedLink() {
		const utmSlug = `Solicitar-${this.product?.name || ''}`;
		let rel = 'noopener noreferrer';

		if (this.product?.outboundLink?.hasPartnership) {
			rel += ' sponsored';
		}

		const href = this.utmCheckBox
			? addParamsToURL(
					{
						key: 'utm_content',
						value: utmSlug,
					},
					this.product?.outboundLink?.url
			  )
			: this.product?.outboundLink?.url;

		return {
			href,
			rel,
		};
	}

	get id() {
		return this.selectedProduct ?? '';
	}

	get options(): ProductItem[] {
		const options = this.selectProductOptions ?? {};
		const keys = Object.keys(options);
		return keys.map(type => ({ type, items: options[type] }));
	}

	/**
	 * Extracts credit card data from Wordpress raw content
	 * @param html
	 */
	static async extractProducts(html: string | undefined) {
		if (!html) return [];
		const blocks = extractWpBlocks(html ?? '');

		const { __type, __name } = new ModelGenericCallBlock();

		// extracts only ModelGenericCallBlock from blocks
		const genericCallBlocks = filterGutenbergBlocks(
			blocks,
			__type,
			__name
		) as Block<ModelGenericCallBlock>[];

		// get credit card ids (excluding duplications)
		const idsAndTypes = uniq(
			compact(
				genericCallBlocks.map(it => ({
					id: it.data?.id,
					type: it.data?.selectedProductTypeEnglish,
					cls: getGutenbergResourceClass(
						it.data?.selectedProductTypeEnglish || ''
					),
				}))
			)
		);

		// get full data of selected credit card ids
		const promises = idsAndTypes.map(it =>
			axiosT
				.get(`${process.env.NEXT_PUBLIC_BFF_API}/api/${it.type}/${it.id}`)
				.as(it.cls)
				.fetchData()
		);

		try {
			return await Promise.all(promises);
		} catch {
			return [];
		}
	}
}

export interface Product {
	id: string;
	name: string;
}

export interface ProductItem {
	type: string;
	items: Product[];
}
