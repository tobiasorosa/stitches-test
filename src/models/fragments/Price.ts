import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Price {
	@AxiosExpose()
	value?: number;

	@AxiosExpose()
	observation?: string;
}
