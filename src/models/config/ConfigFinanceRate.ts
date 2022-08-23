import { ConfigFinanceRateItem } from '~/src/models/fragments/Config/ConfigFinanceRateItem';
import axiosT, {
	AxiosExclude,
	AxiosResponseExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigFinanceRate {
	@AxiosResponseExpose()
	@AxiosTransform(ConfigFinanceRateItem)
	items?: ConfigFinanceRateItem[];

	static async fetch() {
		const config = new ConfigFinanceRate();

		config.items = await axiosT
			.get(`${process.env.NEXT_PUBLIC_CONFIG_BASE_URL}/finance_rate.json`)
			.withName('fetch@ConfigFinanceRate')
			.asArrayOf(ConfigFinanceRateItem)
			.fetchData();

		return config;
	}
}
