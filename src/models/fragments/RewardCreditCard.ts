import * as Serialize from '@dev-plus-plus/axios-transformer'

import {Reward} from '~src/models/fragments/Reward'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class RewardCreditCard {
  @Serialize.AxiosExpose('cartaoDeCreditoId')
  idCreditCard?: string

  @Serialize.AxiosExpose('recompensaId')
  idReward?: string

  @Serialize.AxiosExpose('observacao')
  observation?: string

  @Serialize.AxiosExpose('recompensa')
  @Serialize.AxiosTransform(Reward)
  reward?: Reward
}
