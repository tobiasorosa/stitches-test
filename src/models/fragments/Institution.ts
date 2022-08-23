import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Institution implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('nome')
	name?: string;

	@AxiosExpose()
	createAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	@AxiosExpose()
	cnpj?: string;

	@AxiosExpose()
	tipoEmpresaId?: number;

	@AxiosExpose()
	urlImagem?: string;

	get tag() {
		return this.name;
	}
}
