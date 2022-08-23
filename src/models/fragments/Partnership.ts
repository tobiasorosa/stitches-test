import * as Serialize from '@dev-plus-plus/axios-transformer'

import {IResource} from '~src/models/interfaces/IResource'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Partnership implements IResource {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose('empresaId')
  idCompany?: string

  @Serialize.AxiosExpose('intermediadorId')
  idIntermediary?: string

  @Serialize.AxiosExpose('cartaoDeCreditoId')
  idCreditCard?: string

  @Serialize.AxiosExpose('linkParceria')
  linkPartnership?: string

  @Serialize.AxiosExpose('observacao')
  observation?: string

  @Serialize.AxiosExpose()
  createAt?: string

  @Serialize.AxiosExpose()
  updatedAt?: string

  @Serialize.AxiosExpose('ativo')
  active?: boolean

  get tag() {
    return this.id
  }
}
