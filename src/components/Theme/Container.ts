import { styled } from '~/src/styles/stitches.config';

export const Container = styled('div', {
	width: '100%',
	marginInlineStart: 'auto',
	marginInlineEnd: 'auto',
	paddingInlineStart: '1rem',
	paddingInlineEnd: '1rem',
	alignSelf: 'center',

	'@sm': {
		maxWidth: '540px',
	},

	'@md': {
		maxWidth: '720px',
	},

	'@lg': {
		maxWidth: '900px',
	},

	'@xl': {
		maxWidth: '1140px',
	},

	variants: {
		for: {
			navbar: {
				width: '100%',
				marginInlineStart: 'auto',
				marginInlineEnd: 'auto',
				paddingInlineStart: '1rem',
				paddingInlineEnd: '1rem',
				alignSelf: 'center',
			},
		},
	},
});
