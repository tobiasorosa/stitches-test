import {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { Reward } from '~src/models/fragments/Reward';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class RewardCreditCard {
	@AxiosExpose('cartaoDeCreditoId')
	idCreditCard?: string;

	@AxiosExpose('recompensaId')
	idReward?: string;

	@AxiosExpose('observacao')
	observation?: string;

	@AxiosExpose('recompensa')
	@AxiosTransform(Reward)
	reward?: Reward;
}
