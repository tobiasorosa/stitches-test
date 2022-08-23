import * as Serialize from '@dev-plus-plus/axios-transformer'
import {plainToClass} from 'class-transformer'
import React from 'react'

import * as Custom from '~src/components/custom'
import {ConfigAdPage} from '~src/models/config/ConfigAdPage'
import {IGutenberg} from '~src/models/interfaces/IGutenberg'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelCustomAd implements IGutenberg {
  readonly __type = 'custom'
  readonly __name = 'ad'

  /*  constructor(ratio?: number) {
    this.ratio = ratio
  } */

  render() {
    const slot = this.idBlock?.shift() ?? '3055626374'
    return (
      <Custom.Adsense
        my={6}
        showInfo={true}
        slot={`${slot}`}
        data-testid={`ad-inserter__${slot}`}
      />
    )
  }

  postBuild(meta?: WordPressMetaData) {
    this.pageId = meta?.pageId
    this.pageType = meta?.pageType
    this.configAd = plainToClass(
      ConfigAdPage,
      meta?.configAd?.[meta?.pageType || 'Post']
    )
  }

  @Serialize.AxiosResponseExpose()
  idBlock?: number[]

  @Serialize.AxiosResponseExpose()
  ratio?: number

  @Serialize.AxiosResponseExpose()
  pageId?: number

  @Serialize.AxiosResponseExpose()
  pageType?: string

  @Serialize.AxiosResponseExpose()
  configAd?: ConfigAdPage
}
