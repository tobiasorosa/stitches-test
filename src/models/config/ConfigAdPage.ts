import {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { ConfigAdItem } from '~src/models/fragments/ConfigAdItem';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAdPage {
	@AxiosExpose()
	@AxiosTransform(ConfigAdItem)
	content?: ConfigAdItem[];
}
