import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class AccountCons implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose()
  accountId?: string

  @Serialize.AxiosExpose('descricao')
  description?: string

  get tag() {
    return this.id
  }
}
