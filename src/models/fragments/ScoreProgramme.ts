import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ScoreProgramme {
  @Serialize.AxiosExpose('valores')
  values?: string

  @Serialize.AxiosExpose('valor')
  amount?: number

  @Serialize.AxiosExpose('ativo')
  active?: boolean
}
