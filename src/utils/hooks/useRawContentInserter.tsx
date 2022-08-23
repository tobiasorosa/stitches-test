import parser from 'html-react-parser';
import React from 'react';
import { Box } from '~/src/components/Theme';

import { ModelCustomAd } from '~src/models/guttenberg/ModelCustomAd';
import {
	convertWpShortcode,
	extractWpBlocks,
	insertAds,
} from '~src/utils/wordpress';
import { sanitize } from '../miscellaneous';
export interface Options {
	ads?: AdsOptions;
	meta?: WordPressMetaData;
	isAmp?: boolean;
}

export interface AdsOptions {
	ratio?: number;
}

export function useRawContentInserter(html: string, options?: Options) {
	const meta = React.useMemo(() => options?.meta ?? {}, [options]);
	const isAmp = React.useMemo(() => options?.isAmp ?? false, [options]);

	return React.useMemo(() => {
		const blocks = extractWpBlocks(html, meta);

		const model = new ModelCustomAd();
		model.postBuild(meta);

		insertAds(blocks, model);

		// converts blocks into react content
		return blocks.map((it, i, self) => {
			// Gutenberg block
			if (it.data) {
				return (
					<Box
						key={i}
						css={{
							marginBottom: '1rem',

							'@xl': {
								maxWidth: '750px',
							},
						}}
						className={'data-wrapped'}
						data-testid={`data-wrapped__${it.data.__type}:${it.data.__name}__${i}`}
					>
						{it.data.render(self, it)}
					</Box>
				);
			}

			// WP fragment
			if (it.html) {
				const rawHtml = convertWpShortcode(it.html, meta, isAmp);

				return (
					<React.Fragment key={i}>{parser(sanitize(rawHtml))}</React.Fragment>
				);
			}

			// Fallback - empty fragment
			return <React.Fragment key={i} />;
		});
	}, [html, meta]);
}
