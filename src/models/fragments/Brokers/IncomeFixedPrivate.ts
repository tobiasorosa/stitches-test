import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class IncomeFixedPrivate implements IResource {
  readonly __typename = 'ServiceBroker'

  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose()
  name?: string

  get tag() {
    return this.id
  }
}
