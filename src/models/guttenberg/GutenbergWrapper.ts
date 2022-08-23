import * as Serialize from '@dev-plus-plus/axios-transformer'

import {ModelGenericCallBlock} from '~src/models/gutenberg/ModelGenericCallBlock'
import {ModelHighlightBlock} from '~src/models/gutenberg/ModelHighlightBlock'
import {ModelIdhBestSummaryBlock} from '~src/models/gutenberg/ModelIdhBestSummaryBlock'
import {ModelWPImages} from '~src/models/gutenberg/ModelWPImages'
import {IGutenberg} from '~src/models/interfaces/IGutenberg'

import {ModelWPFaq} from './ModelWPFaq'

/**
 * Register here all Gutenberg models into 'blocks' field
 */
export abstract class GutenbergWrapper {
  static blocks: Array<Serialize.ClassType<IGutenberg>> = [
    ModelGenericCallBlock,
    ModelHighlightBlock,
    ModelIdhBestSummaryBlock,
    ModelWPFaq,
    ModelWPImages,
  ]
}
