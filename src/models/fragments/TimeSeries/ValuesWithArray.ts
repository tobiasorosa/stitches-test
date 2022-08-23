import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { ValuesArray } from './ValuesArray';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ValuesWithArray {
	@AxiosExpose('ano')
	year?: string;

	@AxiosExpose('acumuladoAno')
	yearAccumulated?: string;

	@AxiosExpose('valores')
	values?: ValuesArray[];
}
