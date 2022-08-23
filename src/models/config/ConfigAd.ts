import axiosT, {
	AxiosExclude,
	AxiosExpose,
} from '~/src/utils/axios-transformer/src';

import { ConfigAdPosition } from '~src/models/fragments/ConfigAdPosition';
@AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAd {
	@AxiosExpose()
	Post?: ConfigAdPosition;

	@AxiosExpose()
	Calculadora?: ConfigAdPosition;

	@AxiosExpose()
	Tabela?: ConfigAdPosition;

	static async fetchOne() {
		return await axiosT
			.get(`${process.env.NEXT_PUBLIC_CONFIG_BASE_URL}/page_ads_v2.json`)
			.withName('fetchOne@ConfigAd')
			.as(ConfigAd)
			.fetchData();
	}
}
