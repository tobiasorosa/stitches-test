import axiosT, * as Serialize from '@dev-plus-plus/axios-transformer'

export interface IResource {
  id: string
  name: string
}

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelBrokerFilter {
  @Serialize.AxiosExpose()
  brokerageFeeValue?: IResource[]

  @Serialize.AxiosExpose()
  brokerageFee?: IResource[]

  @Serialize.AxiosExpose('services')
  services?: IResource[]

  @Serialize.AxiosExpose('incomeVariables')
  incomeVariables?: IResource[]

  @Serialize.AxiosExpose('incomeFixedPublics')
  incomeFixedPublics?: IResource[]

  @Serialize.AxiosExpose('incomeFixedPrivates')
  incomeFixedPrivates?: IResource[]

  @Serialize.AxiosExpose('fundInvestments')
  fundInvestments?: IResource[]

  @Serialize.AxiosExpose()
  product?: IResource[]

  static async fetchOne() {
    return await axiosT
      .get('/api/brokers/filter-groups')
      .withName('fetchOne@Broker')
      .as(ModelBrokerFilter)
      .fetchData()
  }
}
