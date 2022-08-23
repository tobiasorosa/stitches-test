import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Cons implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('cartaoDeCreditoId')
	idCreditCard?: string;

	@AxiosExpose('descricao')
	description?: string;

	@AxiosExpose()
	createAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	get tag() {
		return this.id;
	}
}
