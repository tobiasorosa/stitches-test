import React from 'react';

import { ModelGenericCallBlock as Model } from '~src/models/gutenberg/ModelGenericCallBlock';
import { Box, Heading, Text } from '../../Theme';
import { Context } from './Context';
import { ProductGetter } from './ProductGetter';

export interface GenericCallBlockProps {
	data: Model;
}

export function GenericCallBlock(props: GenericCallBlockProps) {
	const { data, ...rest } = props;

	const product = React.useMemo(() => data.product, [data]);

	return (
		<Context.Provider value={{ data, product }}>
			<Box
				css={{
					paddingY: '1rem',
				}}
				{...rest}
			>
				{product && (
					<React.Fragment>
						<Box
							css={{
								marginBottom: '0.5rem',
								marginLeft: '0.5rem',
							}}
						>
							<Heading as={'h3'} size={'md'}>
								{data.mainTitle ? data.mainTitle : data.selectedProductName}
							</Heading>

							{data.subtitle && (
								<Text variant='text2Regular'>{data.subtitle}</Text>
							)}
						</Box>

						<ProductGetter />
					</React.Fragment>
				)}
			</Box>
		</Context.Provider>
	);
}
