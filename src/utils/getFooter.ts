import { GET_MENUS } from '../queries/get_menus';
import { RootQuery } from '../types/wp-graphql';
import { client } from './apollo-client';
import { processFooter } from './processFooter';

export const getFooter = async () => {
	const { data: footer } = await client.query<RootQuery>({
		query: GET_MENUS,
		errorPolicy: 'ignore',
	});

	const { footerItems, groupCash } = processFooter(footer.menus);

	return {
		footerData: footerItems,
		groupCash,
	};
};
