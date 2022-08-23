import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class IPVAitem {
  @Serialize.AxiosResponseExpose()
  state?: string

  @Serialize.AxiosResponseExpose()
  particular?: number

  @Serialize.AxiosResponseExpose()
  caminhonetes?: number

  @Serialize.AxiosResponseExpose()
  transporte?: number

  @Serialize.AxiosResponseExpose()
  motocicletas?: number

  @Serialize.AxiosResponseExpose()
  locadoras?: number

  @Serialize.AxiosResponseExpose()
  onibus?: number

  @Serialize.AxiosResponseExpose()
  quota?: number

  @Serialize.AxiosResponseExpose()
  discount?: number
}
