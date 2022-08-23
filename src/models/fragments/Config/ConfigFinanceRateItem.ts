import {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigFinanceRateItem {
	@AxiosResponseExpose('name')
	name?: string;

	@AxiosResponseExpose('rate')
	rate?: number;
}
