import * as Serialize from '@dev-plus-plus/axios-transformer'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ConfigAdItem {
  @Serialize.AxiosExpose('index_paragraph')
  indexParagraph?: number

  @Serialize.AxiosExpose('id_block')
  idBlock?: number

  @Serialize.AxiosExpose('page_blacklist')
  pageBlacklist?: number[]
}
