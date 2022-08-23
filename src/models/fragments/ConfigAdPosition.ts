import * as Serialize from '@dev-plus-plus/axios-transformer'

import {ConfigAdItem} from '~src/models/fragments/ConfigAdItem'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAdPosition {
  @Serialize.AxiosExpose('content')
  content?: ConfigAdItem[]

  @Serialize.AxiosExpose('topSidebar')
  topSidebar?: ConfigAdItem

  @Serialize.AxiosExpose('bottomSidebar')
  bottomSidebar?: ConfigAdItem

  @Serialize.AxiosExpose('result')
  result?: ConfigAdItem
}
