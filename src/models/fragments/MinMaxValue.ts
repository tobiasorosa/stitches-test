import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class MinMaxValue {
	@AxiosExpose()
	valueMin?: number;

	@AxiosExpose()
	valueMax?: number;
}
