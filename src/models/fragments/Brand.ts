import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Brand implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('nome')
	name?: string;

	get tag() {
		return this.name;
	}
}
