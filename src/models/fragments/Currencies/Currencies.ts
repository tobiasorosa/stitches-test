import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Currencies {
  @Serialize.AxiosExpose('USD')
  USD?: number

  @Serialize.AxiosExpose('BRL')
  BRL?: number

  @Serialize.AxiosExpose('EUR')
  EUR?: number

  @Serialize.AxiosExpose('GBP')
  GBP?: number

  @Serialize.AxiosExpose('CAD')
  CAD?: number

  @Serialize.AxiosExpose('AUD')
  AUD?: number

  @Serialize.AxiosExpose('NZD')
  NZD?: number

  @Serialize.AxiosExpose('JPY')
  JPY?: number

  @Serialize.AxiosExpose('CNY')
  CNY?: number

  @Serialize.AxiosExpose('CHF')
  CHF?: number

  @Serialize.AxiosExpose('ARS')
  ARS?: number

  @Serialize.AxiosExpose('CLP')
  CLP?: number

  @Serialize.AxiosExpose('MXN')
  MXN?: number
}
