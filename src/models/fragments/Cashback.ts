import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Cashback {
	@AxiosExpose('valores')
	values?: string;

	@AxiosExpose('valor')
	amount?: number;

	@AxiosExpose('ativo')
	active?: boolean;
}
