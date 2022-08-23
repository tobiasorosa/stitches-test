import { AxiosExclude } from '~/src/utils/axios-transformer/src';
import { processLinkData } from '~/src/utils/miscellaneous/processLinkData';
import { ProductLinkShortcode } from '~src/models/shortcode/ProductLinkShortcode';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ButtonShortcode extends ProductLinkShortcode {
	readonly __tag: string = 'botao-produto';

	renderHtmlString(postId?: string, isAmp?: boolean) {
		const { product, label } = this;

		const { rel, url } = processLinkData(
			postId || '',
			{
				productId: product?.id,
				productType: product?.productType,
				productName: product?.name,
				linkLocationName: 'shortcode_botao_produto',
				outboundLink: product?.outboundLink,
			},
			isAmp
		);

		if (product?.outboundLink?.url && label) {
			return `<a target="_blank" rel="${rel}" class="chakra-link idin-outbound-link" data-idin-product-id=${
				product.id
			} data-idin-product-type=${product.productType} data-idin-product-name=${
				product.name
			} data-idin-link-name="shortcode_botao_produto" data-idin-link-has-partnership=${
				product?.outboundLink.hasPartnership || 'false'
			} data-idin-amp=${isAmp ? 'amp' : 'noamp'} href=${url}>${label}</a>`;
		}

		return '?';
	}
}
