import * as Serialize from '@dev-plus-plus/axios-transformer'

import {ConfigAdItem} from '~src/models/fragments/ConfigAdItem'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAdPage {
  @Serialize.AxiosExpose()
  @Serialize.AxiosTransform(ConfigAdItem)
  content?: ConfigAdItem[]
}
