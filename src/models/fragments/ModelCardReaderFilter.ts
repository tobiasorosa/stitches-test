import axiosT, {
	AxiosExclude,
	AxiosExpose,
} from '~/src/utils/axios-transformer/src';

export interface IResource {
	id: string;
	name: string;
}

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelCardReaderFilter {
	@AxiosExpose()
	flags?: IResource[];

	@AxiosExpose()
	brands?: IResource[];

	@AxiosExpose()
	connections?: IResource[];

	@AxiosExpose()
	characteristics?: IResource[];

	@AxiosExpose()
	profiles?: IResource[];

	static async fetchOne() {
		return await axiosT
			.get('/api/cardReader/filter-groups')
			.withName('fetchOne@CardReader')
			.as(ModelCardReaderFilter)
			.fetchData();
	}
}
