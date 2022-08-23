import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class AccountPros implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	accountId?: string;

	@AxiosExpose('descricao')
	description?: string;

	get tag() {
		return this.id;
	}
}
