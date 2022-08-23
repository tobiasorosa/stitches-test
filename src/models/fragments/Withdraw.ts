import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Withdraw {
  @Serialize.AxiosExpose()
  coin?: number

  @Serialize.AxiosExpose()
  freeOccurrence?: number
}
