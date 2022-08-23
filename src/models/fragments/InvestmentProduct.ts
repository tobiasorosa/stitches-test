import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude()
export class InvestmentProduct {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose()
  name?: string
}
