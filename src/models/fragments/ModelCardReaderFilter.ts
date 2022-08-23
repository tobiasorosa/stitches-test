import * as Serialize from '@dev-plus-plus/axios-transformer'
import {axiosT} from '@dev-plus-plus/axios-transformer'

export interface IResource {
  id: string
  name: string
}

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelCardReaderFilter {
  @Serialize.AxiosExpose()
  flags?: IResource[]

  @Serialize.AxiosExpose()
  brands?: IResource[]

  @Serialize.AxiosExpose()
  connections?: IResource[]

  @Serialize.AxiosExpose()
  characteristics?: IResource[]

  @Serialize.AxiosExpose()
  profiles?: IResource[]

  static async fetchOne() {
    return await axiosT
      .get('/api/cardReader/filter-groups')
      .withName('fetchOne@CardReader')
      .as(ModelCardReaderFilter)
      .fetchData()
  }
}
