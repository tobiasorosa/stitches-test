import { Maybe } from 'graphql/jsutils/Maybe';
import {
	MenuToMenuItemConnectionEdge,
	RootQueryToMenuConnection,
	RootQueryToMenuConnectionEdge,
} from '../types/wp-graphql';

export interface MenuItem {
	__typename: string;
	id: string;
	url: string;
	label: string;
	parentId?: string;
	childItems?: MenuItem[];
}

export const processMegaMenu = (
	data: Maybe<RootQueryToMenuConnection> | undefined
): MenuItem[] | undefined => {
	const filteredMenus = filterMenusByName('Mega Menu', data);

	const flatMenuItems = filteredMenus
		?.sort((a, b) => getPosition(a) - getPosition(b))
		.map(it => flatListToHierarchical(it?.node?.menuItems?.edges));

	return flatMenuItems?.map(it => it[0]);
};

const filterMenusByName = (
	name: string,
	data: Maybe<RootQueryToMenuConnection> | undefined
) => {
	return data?.edges?.filter(it => it?.node?.name?.includes(name));
};

const getPosition = (menu: Maybe<RootQueryToMenuConnectionEdge>) => {
	const position = menu?.node?.locations?.[0]?.slice(-2) || '0';
	return Number(position);
};

const flatListToHierarchical = (
	data: Maybe<Maybe<MenuToMenuItemConnectionEdge>[]> | undefined = []
): MenuItem[] => {
	const tree: any = [];
	const childrenOf: any = {};
	data
		?.map(it => it?.node)
		.forEach(item => {
			const newItem = { ...item };
			const { id = '', parentId = 0 } = newItem;
			childrenOf[id] = childrenOf[id] || [];
			newItem['childItems'] = childrenOf[id];
			parentId
				? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
				: tree.push(newItem);
		});
	return tree;
};
