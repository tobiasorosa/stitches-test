import React from 'react'

import {Block} from '~/src/utils/wordpress'

export interface IGutenberg {
  readonly __type: string
  readonly __name: string
  __html?: string
  postBuild?: (meta?: WordPressMetaData) => void
  render(
    self?: Block<IGutenberg, unknown>[],
    it?: Block<IGutenberg, unknown>
  ): React.ReactElement
}
