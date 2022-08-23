import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class InvestmentsProducts implements IResource {
  @Serialize.AxiosExpose()
  type?: string

  @Serialize.AxiosExpose()
  name?: string

  get tag() {
    return this.type
  }
}
