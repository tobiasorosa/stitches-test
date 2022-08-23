import React from 'react';
import { HighlightBlock } from '~/src/components/Gutenberg/HighlightBlock';
import {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

import { Block } from '~/src/utils/wordpress';
import { IGutenberg } from '~src/models/interfaces/IGutenberg';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelHighlightBlock implements IGutenberg {
	readonly __type = 'wp';
	readonly __name = 'cgb/block-idh-highlights';
	__html = '';

	render(self: Block<IGutenberg, unknown>[], it: Block<IGutenberg, unknown>) {
		if (this.highlight === 'Paragrafo') {
			const pastBlocks = self.filter(block => {
				return block.index < it.index && block.data?.__name === this.__name;
			});
			pastBlocks.forEach(block => {
				if (block.data?.__name === this.__name) {
					const highlightBlock = block.data as ModelHighlightBlock;
					if (highlightBlock.highlight !== 'Paragrafo') {
						this.bgColor = highlightBlock.bgColor;
						this.borderColor = highlightBlock.borderColor;
					}
				}
			});
		}

		return <HighlightBlock data={this} />;
	}

	@AxiosResponseExpose()
	title?: string;

	@AxiosResponseExpose()
	textInput?: string;

	@AxiosResponseExpose()
	src?: string;

	@AxiosResponseExpose()
	alt?: string;

	@AxiosResponseExpose()
	highlight?: string;

	@AxiosResponseExpose()
	bgColor?: string;

	@AxiosResponseExpose()
	borderColor?: string;

	postBuild() {
		const matchSrc = this.__html.match(/<img.+src=(?:"|')(.+?)(?:"|')(?:.+?)>/);
		const matchAlt = this.__html.match(/<img.+alt=(?:"|')(.+?)(?:"|')(?:.+?)>/);
		const matchDiv = this.__html.match(/<div.+data-type=(?:"|')(.+?)(?:"|')>/);

		this.src = matchSrc?.[1];
		this.alt = matchAlt?.[1];
		this.highlight = matchDiv?.[1];

		switch (this.highlight) {
			case 'Prós':
				this.bgColor = '#DEF9EA';
				this.borderColor = '#9EEAC0';
				break;
			case 'Contras':
				this.bgColor = '#FFEDED';
				this.borderColor = '#FFBABA';
				break;
			case 'Atenção':
				this.bgColor = '#FFF5C7';
				this.borderColor = '#FFD864';
				break;
			case 'Feedback':
				this.bgColor = '#e6c6af';
				this.borderColor = '#815d3d';
				break;
			case 'Dicas':
			case 'Pesquisa':
				this.bgColor = '#dbbff7';
				this.borderColor = '#7a39b4';
				break;
			case 'Dinheiro':
				this.bgColor = '#cdd6fc';
				this.borderColor = '#003bdf';
				break;
			case 'Citação':
				this.bgColor = '#b0ceff';
				this.borderColor = '#0071ff';
				break;
			case 'Dúvida':
				this.bgColor = '#e7e7e7';
				this.borderColor = '#828282';
				break;
			case 'Paragrafo':
				this.bgColor = '#DEF9EA';
				this.borderColor = '#9EEAC0';
				break;
		}
	}
}
