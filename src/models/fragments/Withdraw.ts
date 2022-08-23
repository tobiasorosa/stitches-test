import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Withdraw {
	@AxiosExpose()
	coin?: number;

	@AxiosExpose()
	freeOccurrence?: number;
}
