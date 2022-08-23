import * as Serialize from '@dev-plus-plus/axios-transformer'
import React from 'react'

import * as Local from '~src/components/gutenberg/index'
import {IGutenberg} from '~src/models/interfaces/IGutenberg'

@Serialize.AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelWPFaq implements IGutenberg {
  readonly __type = 'wp'

  readonly __name = 'saswp/faq-block'

  __html = ''

  render() {
    return this.items ? <Local.Faq data={this.items} /> : <></>
  }

  @Serialize.AxiosResponseExpose()
  items?: Local.FaqType[]
}
