import axiosT, {
	AxiosExclude,
	AxiosExpose,
} from '~/src/utils/axios-transformer/src';

export interface IResource {
	id: string;
	name: string;
}

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelCreditCardFilter {
	@AxiosExpose()
	annuity?: IResource[];

	@AxiosExpose()
	brands?: IResource[];

	@AxiosExpose()
	cashback?: IResource[];

	@AxiosExpose()
	coverage?: IResource[];

	@AxiosExpose()
	scoreProgramme?: IResource[];

	@AxiosExpose()
	minimumIncome?: IResource[];

	static async fetchOne() {
		return await axiosT
			.get('/api/credit-cards/filter-groups')
			.withName('fetchOne@CreditCards')
			.as(ModelCreditCardFilter)
			.fetchData();
	}
}
