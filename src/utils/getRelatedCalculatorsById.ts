import { GET_CALCULATORS_RELATED_NEWS } from '../queries/get_calculators_related_news';
import { RootQuery } from '../types/wp-graphql';
import { client } from './apollo-client';

export const getRelatedCalculatorsById = async (calculatorIds: number[]) => {
	const { data: relatedCalculators } = await client.query<RootQuery>({
		query: GET_CALCULATORS_RELATED_NEWS,
		variables: {
			ids: calculatorIds,
		},
	});

	return relatedCalculators.calculadoras?.nodes;
};
