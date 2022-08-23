import * as Serialize from '@dev-plus-plus/axios-transformer'
import {axiosT} from '@dev-plus-plus/axios-transformer'

import {IPVAitem} from '~/src/models/fragments/Config/IPVA'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class IPVATable {
  @Serialize.AxiosResponseExpose()
  @Serialize.AxiosTransform(IPVAitem)
  items?: IPVAitem[]

  static async fetch() {
    const config = new IPVATable()

    config.items = await axiosT
      .get(`${process.env.NEXT_PUBLIC_CONFIG_BASE_URL}/ipva_table.json`)
      .withName('fetch@IPVATable')
      .asArrayOf(IPVAitem)
      .fetchData()

    return config
  }
}
