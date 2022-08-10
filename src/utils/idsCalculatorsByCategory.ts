import { Maybe } from 'graphql/jsutils/Maybe';

export const idsCalculatorsByCategory = (
	nameCategoryCalculator: Maybe<string> | undefined
) => {
	let idsCalculators;
	if (nameCategoryCalculator === 'Saúde') {
		idsCalculators = [1376845, 1376843, 73286, 73299];
	} else if (
		nameCategoryCalculator === 'Financeiras' ||
		nameCategoryCalculator === 'Datas'
	) {
		idsCalculators = [1131189, 1369876, 73296, 1629634];
	} else {
		idsCalculators = [73261, 73286, 78966, 73257];
	}

	return { idsCalculators };
};
