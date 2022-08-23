import axiosT, {
	AxiosExclude,
	AxiosExpose,
} from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';
import { FinancingProducts } from '~src/models/resources/FinancingProducts';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class RealState extends FinancingProducts implements IResource {
	readonly __type = 'real-state-financing';

	@AxiosExpose()
	minimumEntry?: number;

	@AxiosExpose()
	amortization?: string;

	@AxiosExpose()
	cetNotDisclosed?: boolean;

	static async fetchOne(id: string) {
		return await axiosT
			.get(`/api/real-state-financing/${id}`)
			.withName('fetchOne@RealStateFinancing')
			.as(RealState)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('/api/real-state-financing')
			.withName('fetchList@RealStateFinancing')
			.asArrayOf(RealState)
			.fetchData();
	}
}
