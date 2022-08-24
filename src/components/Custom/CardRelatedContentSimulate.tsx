import React from 'react';
import { PostCardSimulate } from '../App/PostCardSimulate';
import { Context } from '../Calculators/Context';
import { Box, Heading, Stack } from '../Theme';

export const CardRelatedContentSimulate = () => {
	const { meta } = React.useContext(Context);
	const related = React.useMemo(() => meta?.related, [meta]);

	return (
		<Stack
			css={{
				maxWidth: '730px',
				flexDirection: 'column',
			}}
		>
			<Heading as={'h2'} variant={'subtitle1SemiBold'}>
				Calculadoras relacionadas
			</Heading>

			<Stack
				css={{
					overflowX: 'scroll',
				}}
			>
				{related?.map(it => {
					return (
						<Box
							css={{
								borderWidth: 1,
								borderRadius: '0.75rem',
								margin: '0.75rem',
							}}
							key={it.id}
						>
							<PostCardSimulate post={it} />
						</Box>
					);
				})}
			</Stack>
		</Stack>
	);
};
