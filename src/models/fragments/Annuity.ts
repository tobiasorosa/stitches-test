import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Annuity {
	@AxiosExpose('valor')
	amount?: number;

	@AxiosExpose('qtdParcelas')
	installments?: number;

	@AxiosExpose('valorParcela')
	amountInstallment?: number;

	@AxiosExpose('observacao')
	observation?: string;
}
