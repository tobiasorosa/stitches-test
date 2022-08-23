import axiosT, {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { Resource } from '~src/models/fragments/Resource';
import { IResource } from '~src/models/interfaces/IResource';
import { FinancingProducts } from '~src/models/resources/FinancingProducts';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Loan extends FinancingProducts implements IResource {
	readonly __type = 'loans';

	@AxiosExpose()
	creditAnalysis?: boolean;

	@AxiosExpose()
	@AxiosTransform(Resource)
	customerProfile?: Resource[];

	@AxiosExpose()
	@AxiosTransform(Resource)
	loanTypePj?: Resource[];

	@AxiosExpose()
	@AxiosTransform(Resource)
	requirementLoanPj?: Resource[];

	static async fetchOne(id: string) {
		return await axiosT
			.get(`/api/loans/${id}`)
			.withName('fetchOne@Loan')
			.as(Loan)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('/api/loans')
			.withName('fetchList@Loan')
			.asArrayOf(Loan)
			.fetchData();
	}
}
