import axiosT, {
	AxiosExclude,
	AxiosExpose,
} from '~/src/utils/axios-transformer/src';

export interface IResource {
	id: string;
	name: string;
}

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelBrokerFilter {
	@AxiosExpose()
	brokerageFeeValue?: IResource[];

	@AxiosExpose()
	brokerageFee?: IResource[];

	@AxiosExpose('services')
	services?: IResource[];

	@AxiosExpose('incomeVariables')
	incomeVariables?: IResource[];

	@AxiosExpose('incomeFixedPublics')
	incomeFixedPublics?: IResource[];

	@AxiosExpose('incomeFixedPrivates')
	incomeFixedPrivates?: IResource[];

	@AxiosExpose('fundInvestments')
	fundInvestments?: IResource[];

	@AxiosExpose()
	product?: IResource[];

	static async fetchOne() {
		return await axiosT
			.get('/api/brokers/filter-groups')
			.withName('fetchOne@Broker')
			.as(ModelBrokerFilter)
			.fetchData();
	}
}
