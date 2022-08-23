import * as Serialize from '@dev-plus-plus/axios-transformer'
import {axiosT} from '@dev-plus-plus/axios-transformer'

import {ConfigFinanceRateItem} from '~/src/models/fragments/Config/ConfigFinanceRateItem'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigFinanceRate {
  @Serialize.AxiosResponseExpose()
  @Serialize.AxiosTransform(ConfigFinanceRateItem)
  items?: ConfigFinanceRateItem[]

  static async fetch() {
    const config = new ConfigFinanceRate()

    config.items = await axiosT
      .get(`${process.env.NEXT_PUBLIC_CONFIG_BASE_URL}/finance_rate.json`)
      .withName('fetch@ConfigFinanceRate')
      .asArrayOf(ConfigFinanceRateItem)
      .fetchData()

    return config
  }
}
