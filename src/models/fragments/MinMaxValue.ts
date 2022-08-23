import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class MinMaxValue {
  @Serialize.AxiosExpose()
  valueMin?: number

  @Serialize.AxiosExpose()
  valueMax?: number
}
