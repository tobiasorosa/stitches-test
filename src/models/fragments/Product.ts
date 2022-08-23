import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { IResource } from '~src/models/interfaces/IResource';

import { OutboundLink } from './OutboundLink';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Product implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('nome')
	name?: string;

	@AxiosExpose()
	createAt?: string;

	@AxiosExpose()
	description?: string;

	@AxiosExpose()
	updatedAt?: string;

	@AxiosExpose()
	empresaId?: string;

	@AxiosExpose()
	productType?: string;

	@AxiosExpose()
	slug?: string;

	@AxiosExpose()
	internalLink?: string;

	@AxiosExpose()
	externalLink?: string;

	@AxiosExpose()
	urlImagem?: string;

	@AxiosExpose()
	outboundLink?: OutboundLink;

	get tag() {
		return this.name;
	}
}
