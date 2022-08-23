import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';

import { processLinkData } from '~/src/utils/miscellaneous/processLinkData';
import { OutboundLink } from '~src/models/fragments/OutboundLink';

export interface OutboundLinkProps {
	postID?: string;
	productId?: string;
	productType?: string;
	productName?: string;
	linkLocationName: string;
	outboundLink?: OutboundLink;
	isAmp?: boolean;
}

export interface OutboundLinkComponentProps
	extends ThemingProps<'Link'>,
		LinkProps,
		OutboundLinkProps {}

export const OutboundLinkComponent = (props: OutboundLinkComponentProps) => {
	const {
		children,
		variant,
		postID,
		productId,
		productType,
		productName,
		linkLocationName,
		outboundLink,
		isAmp,
		...rest
	} = props;
	const styles = useStyleConfig('OutboundLink', { variant });

	const isAmpFromHook = useAmp();
	const { pathname, asPath } = useRouter();

	const { rel, url } = processLinkData(
		postID || pathname,
		props,
		isAmpFromHook || isAmp
	);

	const mainUrl = 'https://www.idinheiro.com.br';

	const adRedirectUrl = `${mainUrl}/ad-redirect?productId=${productId}&linkName=${linkLocationName}&urlRef=${mainUrl}${asPath}&url=${url}`;

	return (
		<Link
			className={'idin-outbound-link'}
			data-idin-product-id={productId || 'unknown-id'}
			data-idin-product-type={productType || 'unknown-type'}
			data-idin-product-name={productName || 'unknown-name'}
			data-idin-link-name={linkLocationName || 'unknown-location'}
			data-idin-link-has-partnership={`${
				outboundLink?.hasPartnership || 'false'
			}`}
			data-idin-amp={isAmpFromHook || isAmp ? 'amp' : 'noamp'}
			rel={rel}
			href={outboundLink?.hasPartnership ? url : adRedirectUrl}
			target={'_blank'}
			sx={styles}
			data-testid={`idin-outbound-link__${productId}`}
			{...rest}
		>
			{children}
		</Link>
	);
};
