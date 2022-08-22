import { styled } from '~/src/styles/stitches.config';

export const Grid = styled('div', {
	display: 'grid',

	variants: {
		variant: {
			'content-layout': {
				marginTop: '2rem',
			},
		},
	},
});
