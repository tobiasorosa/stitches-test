import {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { Currencies as Currency } from '../fragments/Currencies/Currencies';
import { Query } from '../fragments/Currencies/Query';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Currencies {
	@AxiosExpose('data')
	@AxiosTransform(Currency)
	data?: Currency;

	@AxiosExpose('query')
	@AxiosTransform(Query)
	query?: Currency;
}
