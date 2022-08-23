import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';
import { ConfigAdItem } from '~src/models/fragments/ConfigAdItem';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAdPosition {
	@AxiosExpose('content')
	content?: ConfigAdItem[];

	@AxiosExpose('topSidebar')
	topSidebar?: ConfigAdItem;

	@AxiosExpose('bottomSidebar')
	bottomSidebar?: ConfigAdItem;

	@AxiosExpose('result')
	result?: ConfigAdItem;
}
