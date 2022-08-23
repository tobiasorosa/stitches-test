import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Price {
  @Serialize.AxiosExpose()
  value?: number

  @Serialize.AxiosExpose()
  observation?: string
}
