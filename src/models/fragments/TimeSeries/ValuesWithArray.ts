import * as Serialize from '@dev-plus-plus/axios-transformer'

import {ValuesArray} from './ValuesArray'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ValuesWithArray {
  @Serialize.AxiosExpose('ano')
  year?: string

  @Serialize.AxiosExpose('acumuladoAno')
  yearAccumulated?: string

  @Serialize.AxiosExpose('valores')
  values?: ValuesArray[]
}
