import { gql } from '@apollo/client';

export const GET_MENUS = gql`
	query GET_MENUS {
		menus(first: 1000) {
			edges {
				node {
					id
					name
					menuItems(first: 1000) {
						edges {
							node {
								id
								url
								label
								parentId
							}
						}
					}
					locations
				}
			}
		}
	}
`;
