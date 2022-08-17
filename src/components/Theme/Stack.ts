import { styled } from '~/src/styles/stitches.config';

export const Stack = styled('div', {
	display: 'flex',

	variants: {
		for: {
			navbar: {
				width: '100%',
				marginInlineStart: 'auto',
				marginInlineEnd: 'auto',
				paddingInlineStart: '1rem',
				paddingInlineEnd: '1rem',
				alignSelf: 'center',
				flexDirection: 'column',
			},

			'navbar-container': {
				alignItems: 'stretch',
				flexDirection: 'column',
			},
		},
	},
});
