import * as Serialize from '@dev-plus-plus/axios-transformer'
@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class Service {
  @Serialize.AxiosExpose()
  id?: string

  @Serialize.AxiosExpose()
  name?: string

  @Serialize.AxiosExpose()
  key?: string
}
