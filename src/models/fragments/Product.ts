import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

import {OutboundLink} from './OutboundLink'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Product implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose('nome')
  name?: string

  @Serialize.AxiosExpose()
  createAt?: string

  @Serialize.AxiosExpose()
  description?: string

  @Serialize.AxiosExpose()
  updatedAt?: string

  @Serialize.AxiosExpose()
  empresaId?: string

  @Serialize.AxiosExpose()
  productType?: string

  @Serialize.AxiosExpose()
  slug?: string

  @Serialize.AxiosExpose()
  internalLink?: string

  @Serialize.AxiosExpose()
  externalLink?: string

  @Serialize.AxiosExpose()
  urlImagem?: string

  @Serialize.AxiosExpose()
  outboundLink?: OutboundLink

  get tag() {
    return this.name
  }
}
