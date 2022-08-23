import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Brand implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose('nome')
  name?: string

  get tag() {
    return this.name
  }
}
