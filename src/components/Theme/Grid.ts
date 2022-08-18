import { styled } from '~/src/styles/stitches.config';

export const Grid = styled('div', {
	display: 'grid',
	maxWidth: '1024px',

	variants: {
		for: {
			'content-layout': {
				marginTop: '2rem',
			},
		},
	},
});
