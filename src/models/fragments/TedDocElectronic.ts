import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude()
export class TedDocElectronic {
  @Serialize.AxiosExpose()
  coin?: number

  @Serialize.AxiosExpose()
  freeOccurrence?: number
}
