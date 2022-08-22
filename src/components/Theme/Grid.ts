import { styled } from '~/src/styles/stitches.config';

export const Grid = styled('div', {
	display: 'grid',

	variants: {
		for: {
			'content-layout': {
				marginTop: '2rem',
			},
		},
	},
});
