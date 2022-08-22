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
		variant: {
			navbar: {
				width: '100%',
				marginInlineStart: 'auto',
				marginInlineEnd: 'auto',
				paddingInlineStart: '1rem',
				paddingInlineEnd: '1rem',
				alignSelf: 'center',
			},

			'calculator-form': {
				padding: '0.75rem',
				paddingInline: 0,
				marginTop: '2rem',
				border: '1px solid #E2E8F0',
				borderRadius: 8,
				display: 'flex',
				flexDirection: 'column',

				'@sm': {
					padding: '1.75rem',
				},
			},
		},
	},
});
