import React from 'react';

import CustomWpImage from '~src/components/Custom/CustomWpImage';
import { Text } from '~/src/components/Theme';
import { IGutenberg } from '~src/models/interfaces/IGutenberg';
import {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class ModelWPImages implements IGutenberg {
	readonly __type = 'wp';
	readonly __name = 'image';
	__html = '';

	render() {
		return (
			<>
				<CustomWpImage src={this.src} alt={this.alt} />

				{/* <Custom.ChakraNextImage
          src={this.src || ''}
          alt={this.src || ''}
          width={this.width}
          height={this.height}
          margin={'auto'}
          className={'next-image-filled'}
        /> */}

				{this.caption && (
					<Text
						size='sm'
						color={'gray'}
						css={{
							textAlign: 'center',
						}}
					>
						{this.caption}
					</Text>
				)}
			</>
		);
	}

	postBuild() {
		const matchSrc = this.__html.match(/<img.+src=(?:"|')(.+?)(?:"|')(?:.+?)>/);
		const matchAlt = this.__html.match(/<img.+alt=(?:"|')(.+?)(?:"|')(?:.+?)>/);
		const matchCaption = this.__html.match(/<figcaption>(.+?)<\/f/);

		this.src = matchSrc?.[1];
		this.alt = matchAlt?.[1];
		this.caption = matchCaption?.[1];
	}

	@AxiosResponseExpose()
	id?: number;

	@AxiosResponseExpose()
	src?: string;

	@AxiosResponseExpose()
	alt?: string;

	@AxiosResponseExpose()
	caption?: string;

	@AxiosResponseExpose()
	width?: string;

	@AxiosResponseExpose()
	height?: string;
}
