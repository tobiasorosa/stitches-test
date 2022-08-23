import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Annuity {
  @Serialize.AxiosExpose('valor')
  amount?: number

  @Serialize.AxiosExpose('qtdParcelas')
  installments?: number

  @Serialize.AxiosExpose('valorParcela')
  amountInstallment?: number

  @Serialize.AxiosExpose('observacao')
  observation?: string
}
