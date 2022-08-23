import axiosT, {
	AxiosExclude,
	AxiosExpose,
} from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';
import { FinancingProducts } from '~src/models/resources/FinancingProducts';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Vehicle extends FinancingProducts implements IResource {
	readonly __type = 'vehicle-financing';

	@AxiosExpose()
	cetNotDisclosed?: boolean;

	static async fetchOne(id: string) {
		return await axiosT
			.get(`/api/vehicle-financing/${id}`)
			.withName('fetchOne@VehicleFinancing')
			.as(Vehicle)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('/api/vehicle-financing')
			.withName('fetchList@VehicleFinancing')
			.asArrayOf(Vehicle)
			.fetchData();
	}
}
