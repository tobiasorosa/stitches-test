import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Cobranded implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('tipoEmpresaId')
	idCompanyType?: number;

	@AxiosExpose('nome')
	name?: string;

	@AxiosExpose('cnpj')
	cnpj?: string;

	@AxiosExpose('urlImagem')
	imageUrl?: string;

	@AxiosExpose()
	createAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	get tag() {
		return this.id;
	}
}
