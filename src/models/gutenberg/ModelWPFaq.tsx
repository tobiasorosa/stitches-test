import React from 'react';
import { Faq, FaqType } from '~/src/components/Gutenberg/Faq';
import {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

import { IGutenberg } from '~src/models/interfaces/IGutenberg';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelWPFaq implements IGutenberg {
	readonly __type = 'wp';

	readonly __name = 'saswp/faq-block';

	__html = '';

	render() {
		return this.items ? <Faq data={this.items} /> : <></>;
	}

	@AxiosResponseExpose()
	items?: FaqType[];
}
