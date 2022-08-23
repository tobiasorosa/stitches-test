import axiosT, {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { ValuesWithArray } from '~src/models/fragments/TimeSeries/ValuesWithArray';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class TimeSerie {
	@AxiosExpose()
	id?: string;

	@AxiosExpose('periodicidade')
	periodicity?: string;

	@AxiosExpose('unidadePadrao')
	defaultUnity?: string;

	@AxiosExpose('dataInicio')
	initialDate?: string;

	@AxiosExpose('dataFim')
	finalDate?: string;

	@AxiosExpose('dataUltimoValor')
	lastValueDate?: string;

	@AxiosExpose('casasDecimaisDivulgacao')
	decimalCases?: number;

	@AxiosExpose('dataUltimaVerificacao')
	lastVerifyDate?: string;

	@AxiosExpose('idBancoCentral')
	centralBankId?: number;

	@AxiosExpose('valores')
	@AxiosTransform(ValuesWithArray)
	values?: ValuesWithArray;

	static async fetchOne(initials: string) {
		return await axiosT
			.get(`/api/temporal-series/${initials}`)
			.withName('fetchOne@TimeSerie')
			.as(TimeSerie)
			.fetchData();
	}
}
