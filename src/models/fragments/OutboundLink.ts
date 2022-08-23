import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class OutboundLink {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose()
  url?: string

  @Serialize.AxiosExpose()
  hasPartnership?: boolean

  @Serialize.AxiosExpose()
  queryStringParamName?: string

  @Serialize.AxiosExpose()
  queryStringParamValue?: string
}
