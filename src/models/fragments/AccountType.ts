import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude()
export class AccountType {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose()
  name?: string
}
