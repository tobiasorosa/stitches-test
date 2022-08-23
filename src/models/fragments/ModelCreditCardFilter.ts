import axiosT, * as Serialize from '@dev-plus-plus/axios-transformer'

export interface IResource {
  id: string
  name: string
}

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelCreditCardFilter {
  @Serialize.AxiosExpose()
  annuity?: IResource[]

  @Serialize.AxiosExpose()
  brands?: IResource[]

  @Serialize.AxiosExpose()
  cashback?: IResource[]

  @Serialize.AxiosExpose()
  coverage?: IResource[]

  @Serialize.AxiosExpose()
  scoreProgramme?: IResource[]

  @Serialize.AxiosExpose()
  minimumIncome?: IResource[]

  static async fetchOne() {
    return await axiosT
      .get('/api/credit-cards/filter-groups')
      .withName('fetchOne@CreditCards')
      .as(ModelCreditCardFilter)
      .fetchData()
  }
}
