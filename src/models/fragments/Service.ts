import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Service {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	name?: string;

	@AxiosExpose()
	key?: string;
}
