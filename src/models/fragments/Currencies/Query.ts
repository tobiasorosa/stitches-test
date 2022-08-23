import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Query {
  @Serialize.AxiosExpose('base_currency')
  base_currency?: string

  @Serialize.AxiosExpose('timestamp')
  timestamp?: number
}
