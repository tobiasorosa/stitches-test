import axiosT, {
	AxiosExclude,
	AxiosExpose,
} from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Category implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('nome')
	name?: string;

	@AxiosExpose()
	createdAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	get tag() {
		return this.name;
	}

	static async fetchOne(id: string) {
		return await axiosT
			.get(`/api/categorias/${id}`)
			.withName('fetchOne@Category')
			.as(Category)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('/api/categorias')
			.withName('fetchList@Category')
			.asArrayOf(Category)
			.fetchData();
	}
}
