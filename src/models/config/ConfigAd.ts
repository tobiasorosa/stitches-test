import * as Serialize from '@dev-plus-plus/axios-transformer'
import {axiosT} from '@dev-plus-plus/axios-transformer'

import {ConfigAdPosition} from '~src/models/fragments/ConfigAdPosition'
@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAd {
  @Serialize.AxiosExpose()
  Post?: ConfigAdPosition

  @Serialize.AxiosExpose()
  Calculadora?: ConfigAdPosition

  @Serialize.AxiosExpose()
  Tabela?: ConfigAdPosition

  static async fetchOne() {
    return await axiosT
      .get(`${process.env.NEXT_PUBLIC_CONFIG_BASE_URL}/page_ads_v2.json`)
      .withName('fetchOne@ConfigAd')
      .as(ConfigAd)
      .fetchData()
  }
}
