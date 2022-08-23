import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigFinanceRateItem {
  @Serialize.AxiosResponseExpose('name')
  name?: string

  @Serialize.AxiosResponseExpose('rate')
  rate?: number
}
