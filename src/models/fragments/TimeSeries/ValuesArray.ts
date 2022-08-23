import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ValuesArray {
	@AxiosExpose('data')
	date?: string;

	@AxiosExpose('dataFim')
	endDate?: string | null;

	@AxiosExpose('valor')
	value?: string;

	@AxiosExpose('acumuladoAno')
	yearAccumulated?: string;

	@AxiosExpose('acumulado12Meses')
	twelveMonthsAccumulated?: string;
}
