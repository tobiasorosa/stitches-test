import { OutboundLinkProps } from '~/src/components/Custom/OutboundLinkComponent';
import { addParamsToURL } from '~/src/utils/addParamsToURL';
import linkLocations from '~src/utils/linkLocations';
import postsIds from '~src/utils/postsIds';

export const processLinkData = (
	postIdOrPath: string,
	props: OutboundLinkProps,
	isAmp?: boolean
) => {
	const { productId, linkLocationName, outboundLink } = props;

	const rel = outboundLink?.hasPartnership
		? `noopener noreferrer sponsored`
		: `noopener noreferrer`;

	const linkLocationNumber = linkLocations[linkLocationName] || '999';

	const postID = postsIds[postIdOrPath] || postIdOrPath || '9999999';

	let url = outboundLink?.url ?? '#';
	if (outboundLink?.queryStringParamName) {
		const hasPartnershipString = outboundLink?.hasPartnership ? 'p1' : 'p0';
		const isAmpString = isAmp ? 'a1' : 'a0';

		const queryParamValue = `${postID}_${productId}_${linkLocationNumber}_${hasPartnershipString}_${isAmpString}`;

		url = addParamsToURL(
			{
				key: outboundLink?.queryStringParamName,
				value: queryParamValue,
			},
			outboundLink?.url
		);
	}

	return { rel, url: encodeURI(url ?? '#') };
};

//1234561_xxxx-xxxx-xxxx-xxxx_002_p1_a1
//postId_productId_location_haspartner_isamp
