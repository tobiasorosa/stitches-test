import { plainToClass } from 'class-transformer';
import React from 'react';
import { Adsense } from '~/src/components/Custom/Adsense';
import {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

import { ConfigAdPage } from '~src/models/config/ConfigAdPage';
import { IGutenberg } from '~src/models/interfaces/IGutenberg';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelCustomAd implements IGutenberg {
	readonly __type = 'custom';
	readonly __name = 'ad';

	render() {
		const slot = this.idBlock?.shift() ?? '3055626374';
		return (
			<Adsense
				showInfo={true}
				slot={`${slot}`}
				data-testid={`ad-inserter__${slot}`}
			/>
		);
	}

	postBuild(meta?: WordPressMetaData) {
		this.pageId = meta?.pageId;
		this.pageType = meta?.pageType;
		this.configAd = plainToClass(
			ConfigAdPage,
			meta?.configAd?.[meta?.pageType || 'Post']
		);
	}

	@AxiosResponseExpose()
	idBlock?: number[];

	@AxiosResponseExpose()
	ratio?: number;

	@AxiosResponseExpose()
	pageId?: number;

	@AxiosResponseExpose()
	pageType?: string;

	@AxiosResponseExpose()
	configAd?: ConfigAdPage;
}
