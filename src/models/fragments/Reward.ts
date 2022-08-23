import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Reward implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose('descricao')
  description?: string

  @Serialize.AxiosExpose('image')
  imageUrl?: string

  @Serialize.AxiosExpose()
  createAt?: string

  @Serialize.AxiosExpose()
  updatedAt?: string

  @Serialize.AxiosExpose('observacao')
  observation?: string

  get tag() {
    return this.id
  }
}
