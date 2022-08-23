import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Query {
	@AxiosExpose('base_currency')
	base_currency?: string;

	@AxiosExpose('timestamp')
	timestamp?: number;
}
