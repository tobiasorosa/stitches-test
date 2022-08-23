import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude()
export class AccountWithDraw {
  @Serialize.AxiosExpose()
  coin?: number

  @Serialize.AxiosExpose()
  freeOccurrence?: number
}
