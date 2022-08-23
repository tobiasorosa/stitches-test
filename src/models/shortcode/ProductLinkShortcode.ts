import * as Serialize from '@dev-plus-plus/axios-transformer';
import { axiosT } from '@dev-plus-plus/axios-transformer';
import { plainToClass } from 'class-transformer';
import { compact, uniq } from 'lodash';

import { processLinkData } from '~/src/utils/processLinkData';
import { Product } from '~src/models/fragments/Product';
import { IShortcode } from '~src/models/interfaces/IShortcode';
import {
	extractWpShortcode,
	filterShortcodes,
	Shortcode,
} from '~src/utils/wordpress';

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ProductLinkShortcode implements IShortcode {
	readonly __tag: string = 'link-produto';

	renderHtmlString(postId?: string, isAmp?: boolean) {
		const { product, label } = this;

		const { rel, url } = processLinkData(
			postId ?? '',
			{
				productId: product?.id,
				productType: product?.productType,
				productName: product?.name,
				linkLocationName: 'shortcode_link_produto',
				outboundLink: product?.outboundLink,
			},
			isAmp
		);

		if (product?.outboundLink?.url) {
			return `<a target="_blank" rel="${rel}" class="chakra-link idin-outbound-link" data-idin-product-id=${
				product.id
			} data-idin-product-type=${product.productType} data-idin-product-name=${
				product.name
			} data-idin-link-name="shortcode_link_produto" data-idin-link-has-partnership=${
				product?.outboundLink.hasPartnership || 'false'
			} data-idin-amp=${isAmp ? 'amp' : 'noamp'} href=${url}>${label}</a>`;
		}

		return (label && ` <u>${label}</u> `) ?? '?';
	}

	postBuild(meta?: WordPressMetaData) {
		// extract the pool of outbound links from meta data
		const pool = plainToClass(Product, meta?.productInfo ?? []);

		// find the corresponded outbound link and inject it into outbound field
		this.product = pool.find(it => it.id === this.id);
	}

	@Serialize.AxiosResponseExpose('ancora')
	label?: string;

	@Serialize.AxiosResponseExpose()
	id?: string;

	@Serialize.AxiosResponseExpose()
	product?: Product;

	/**
	 * Extracts outbound link data from Wordpress raw content
	 * @param html
	 */
	static async extractProductInfo(html: string | undefined) {
		if (!html) return [];
		const shortcodes = extractWpShortcode(html ?? '');

		const { __tag } = new ProductLinkShortcode();

		// extracts only ProductLinkShortcode from shortcodes
		const productLinkShortcode = filterShortcodes(
			shortcodes,
			__tag
		) as Shortcode<ProductLinkShortcode>[];

		// get product link ids (excluding duplications)
		const ids = uniq(compact(productLinkShortcode.map(it => it.data?.id)));

		// get full data of selected product link ids
		const promises = ids.map(it =>
			axiosT
				.get(`${process.env.NEXT_PUBLIC_BFF_API}/api/products/${it}`)
				.as(Product)
				.fetchData()
		);

		try {
			const productInfo = await Promise.all(promises);

			return productInfo;
		} catch {
			return [];
		}
	}
}
