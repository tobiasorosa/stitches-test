import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class IdealProfile implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose('descricao')
  name?: string

  @Serialize.AxiosExpose()
  createAt?: string

  @Serialize.AxiosExpose()
  updatedAt?: string

  get tag() {
    return this.id
  }
}
