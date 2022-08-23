import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class InvestmentsProducts implements IResource {
	@AxiosExpose()
	type?: string;

	@AxiosExpose()
	name?: string;

	get tag() {
		return this.type;
	}
}
