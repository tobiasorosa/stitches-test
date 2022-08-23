import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class TedDoc {
  @Serialize.AxiosExpose()
  freeOccurrence?: number

  @Serialize.AxiosExpose()
  coin?: number
}
