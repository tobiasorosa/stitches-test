import { IPVAitem } from '~/src/models/fragments/Config/IPVA';
import axiosT, {
	AxiosExclude,
	AxiosResponseExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class IPVATable {
	@AxiosResponseExpose()
	@AxiosTransform(IPVAitem)
	items?: IPVAitem[];

	static async fetch() {
		const config = new IPVATable();

		config.items = await axiosT
			.get(`${process.env.NEXT_PUBLIC_CONFIG_BASE_URL}/ipva_table.json`)
			.withName('fetch@IPVATable')
			.asArrayOf(IPVAitem)
			.fetchData();

		return config;
	}
}
