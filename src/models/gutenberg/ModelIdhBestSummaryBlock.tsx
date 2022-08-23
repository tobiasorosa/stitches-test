import { plainToClass } from 'class-transformer';
import React from 'react';
import { IdhBestSummaryBlock } from '~/src/components/Gutenberg/IdhBestSummaryBlock';
import {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

import { IGutenberg } from '~src/models/interfaces/IGutenberg';
import { CreditCard } from '~src/models/resources/CreditCard';

import { OutboundLink } from '../fragments/OutboundLink';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelIdhBestSummaryBlock implements IGutenberg {
	readonly __type = 'wp';
	readonly __name = 'cgb/block-idh-best-summary';

	render() {
		return <IdhBestSummaryBlock data={this} />;
	}

	/**
	 * [Headless] Bloco de sumário - Recuperar dados (Nome e LinkParceria) do backoffice
	 * @param meta
	 */
	postBuild(meta?: WordPressMetaData) {
		// extract the pool of credit cards from meta data
		const pool = plainToClass(CreditCard, meta?.genericCallProducts ?? []);

		for (const header of this.headers) {
			const creditCard = pool.find(it => it.id === header.id);
			header.title = creditCard?.name ?? header.title;
			header.linkParceria = creditCard?.outboundLink?.hasPartnership
				? creditCard?.outboundLink?.url ?? header.linkParceria
				: '';
			header.outboundLink = creditCard?.outboundLink;
		}
		this.postId = `${meta?.pageId || ''}`;
	}

	@AxiosResponseExpose()
	className?: string;

	@AxiosResponseExpose()
	title?: string;

	@AxiosResponseExpose()
	headers: Header[] = [];

	postId?: string;
}

export interface Header {
	id: string;
	link?: string;
	linkParceria?: string;
	title: string;
	subtitle?: string;
	outboundLink?: OutboundLink;
}
