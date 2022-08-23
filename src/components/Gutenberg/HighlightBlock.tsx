import Image from 'next/image';
import React from 'react';

import { ModelHighlightBlock as Model } from '~src/models/gutenberg/ModelHighlightBlock';
import { Box, Text } from '../Theme';

export interface HighlightBlockProps {
	data: Model;
}

export function HighlightBlock(props: HighlightBlockProps) {
	const { data, ...rest } = props;

	return (
		<Box {...rest}>
			<Box
				css={{
					marginBottom: '1.5rem',
					background: data.bgColor,
					padding: '2rem',
					borderLeft: `4px solid ${data.borderColor}`,
					borderTop: '2px solid white',
					margin: '24px 0px 48px',
				}}
			>
				{data.src && (
					<Image
						src={data.src}
						alt={data.alt || 'icone-destaque'}
						width={'60px'}
						height={'60px'}
					/>
				)}

				<Text
					variant={'text1Bold'}
					css={{
						textTransform: 'uppercase',
					}}
				>
					{data.title}
				</Text>

				<Text variant={'text2Regular'}>{data.textInput}</Text>
			</Box>
		</Box>
	);
}
