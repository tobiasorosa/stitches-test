import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Cobranded implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose('tipoEmpresaId')
  idCompanyType?: number

  @Serialize.AxiosExpose('nome')
  name?: string

  @Serialize.AxiosExpose('cnpj')
  cnpj?: string

  @Serialize.AxiosExpose('urlImagem')
  imageUrl?: string

  @Serialize.AxiosExpose()
  createAt?: string

  @Serialize.AxiosExpose()
  updatedAt?: string

  get tag() {
    return this.id
  }
}
