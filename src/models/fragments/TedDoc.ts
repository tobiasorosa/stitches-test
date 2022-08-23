import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class TedDoc {
	@AxiosExpose()
	freeOccurrence?: number;

	@AxiosExpose()
	coin?: number;
}
