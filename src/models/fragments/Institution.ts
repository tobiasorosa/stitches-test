import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Institution implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose('nome')
  name?: string

  @Serialize.AxiosExpose()
  createAt?: string

  @Serialize.AxiosExpose()
  updatedAt?: string

  @Serialize.AxiosExpose()
  cnpj?: string

  @Serialize.AxiosExpose()
  tipoEmpresaId?: number

  @Serialize.AxiosExpose()
  urlImagem?: string

  get tag() {
    return this.name
  }
}
