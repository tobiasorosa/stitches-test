import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Partnership implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('empresaId')
	idCompany?: string;

	@AxiosExpose('intermediadorId')
	idIntermediary?: string;

	@AxiosExpose('cartaoDeCreditoId')
	idCreditCard?: string;

	@AxiosExpose('linkParceria')
	linkPartnership?: string;

	@AxiosExpose('observacao')
	observation?: string;

	@AxiosExpose()
	createAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	@AxiosExpose('ativo')
	active?: boolean;

	get tag() {
		return this.id;
	}
}
