import { gql } from '@apollo/client';

export const GET_CALCULATORS_RELATED_NEWS = gql`
	query GET_CALCULATORS_RELATED_NEWS($ids: [ID!]) {
		calculadoras(where: { in: $ids }) {
			nodes {
				id
				title
				link
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
			}
		}
	}
`;
