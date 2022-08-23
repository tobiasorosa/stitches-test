import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Reward implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('descricao')
	description?: string;

	@AxiosExpose('image')
	imageUrl?: string;

	@AxiosExpose()
	createAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	@AxiosExpose('observacao')
	observation?: string;

	get tag() {
		return this.id;
	}
}
