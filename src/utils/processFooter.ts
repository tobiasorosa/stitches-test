import { Maybe } from 'graphql/jsutils/Maybe';
import { RootQueryToMenuConnection } from '../types/wp-graphql';

export interface NodeItem {
	__typename: string;
	id: string;
	url: string;
	label: string;
	parentId?: string;
}

export interface NodeWp {
	node: NodeItem;
}

export interface FooterItem {
	name: string;
	items: NodeWp[];
}

export const processFooter = (
	data: Maybe<RootQueryToMenuConnection> | undefined
): FooterItem[] | undefined | any => {
	const filteredItems = filterMenusByName('Footer', data);
	const groupCashItems = filterMenusByName('Grupo Cash3', data);
	const groupCash = groupCashItems?.map(elem => elem?.node?.menuItems?.edges);
	const footerItems: any = [];

	filteredItems?.map((item, i) => {
		const nameItem = item?.node?.name?.replace(/footer /gi, '');

		footerItems[i] = {
			name: nameItem,
			items: item?.node?.menuItems?.edges,
		};
	});

	return { footerItems, groupCash };
};

const filterMenusByName = (
	name: string,
	data: Maybe<RootQueryToMenuConnection> | undefined
) => {
	return data?.edges?.filter(it => it?.node?.name?.includes(name));
};
