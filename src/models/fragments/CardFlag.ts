import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class CardFlag implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	name?: string;

	@AxiosExpose()
	createAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	@AxiosExpose()
	debit?: boolean;

	@AxiosExpose()
	credit?: boolean;

	@AxiosExpose()
	benefits?: boolean;

	get tag() {
		return this.name;
	}
}
