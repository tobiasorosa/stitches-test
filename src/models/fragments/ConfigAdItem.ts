import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAdItem {
	@AxiosExpose('index_paragraph')
	indexParagraph?: number;

	@AxiosExpose('id_block')
	idBlock?: number;

	@AxiosExpose('page_blacklist')
	pageBlacklist?: number[];
}
