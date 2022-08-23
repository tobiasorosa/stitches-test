import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class TimeSerieValues {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	createdAt?: string;

	@AxiosExpose('data')
	date?: string;

	@AxiosExpose('dataFim')
	endDate?: string | null;

	@AxiosExpose('valor')
	value?: string;

	@AxiosExpose('serieTemporalId')
	timeSerieId?: string;

	@AxiosExpose('acumuladoAno')
	accumulatedYear?: string;

	@AxiosExpose('acumulado12Meses')
	accumulatedLast12Months?: string;
}
