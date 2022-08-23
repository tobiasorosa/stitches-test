import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ValuesArray {
  @Serialize.AxiosExpose('data')
  date?: string

  @Serialize.AxiosExpose('dataFim')
  endDate?: string | null

  @Serialize.AxiosExpose('valor')
  value?: string

  @Serialize.AxiosExpose('acumuladoAno')
  yearAccumulated?: string

  @Serialize.AxiosExpose('acumulado12Meses')
  twelveMonthsAccumulated?: string
}
