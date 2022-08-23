import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class CardFlag implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose()
  name?: string

  @Serialize.AxiosExpose()
  createAt?: string

  @Serialize.AxiosExpose()
  updatedAt?: string

  @Serialize.AxiosExpose()
  debit?: boolean

  @Serialize.AxiosExpose()
  credit?: boolean

  @Serialize.AxiosExpose()
  benefits?: boolean

  get tag() {
    return this.name
  }
}
