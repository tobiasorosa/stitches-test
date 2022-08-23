import { styled } from '~/src/styles/stitches.config';

export const Text = styled('p', {
	fontFamily: 'Overpass',

	variants: {
		size: {
			xs: {
				fontSize: '$xs',
			},
			sm: {
				fontSize: '$sm',
			},
			md: {
				fontSize: '$md',
			},
			lg: {
				fontSize: '$lg',
			},
			xl: {
				fontSize: '$xl',
			},
			'2xl': {
				fontSize: '$2xl',
			},
			'3xl': {
				fontSize: '$3xl',
			},
			'4xl': {
				fontSize: '$4xl',
			},
		},

		variant: {
			subtitle: {
				color: '#4A5568',
				fontSize: '1rem',
				fontWeight: 700,

				marginTop: '2rem',
			},

			'menu-option-item-label': {
				marginTop: '1rem',
				marginBottom: 0,
				fontWeight: 'bold',
				textTransform: 'uppercase',
				color: '#0071ff',
				fontSize: '0.875rem',

				'@lg': {
					marginTop: 0,
					marginBottom: '1rem',
				},
			},

			'before-ad': {
				textAlign: 'center',
				textTransform: 'uppercase',
				fontSize: '$xs',
				marginBottom: '0.5rem',
			},

			text1Regular: {
				fontSize: '2xl',
				fontWeight: 400,
			},
			text1Bold: {
				fontSize: '2xl',
				fontWeight: 700,
			},
			botom1SemiBold: {
				fontSize: '2xl',
				fontWeight: 600,
			},
			botom2SemiBold: {
				fontSize: 'md',
				fontWeight: 600,
				textTransform: 'uppercase',
			},
			text2Regular: {
				fontSize: 'md',
				fontWeight: 400,
			},
			text2Bold: {
				fontSize: 'md',
				fontWeight: 700,
			},
			linkBold: {
				fontSize: 'md',
				fontWeight: 700,
			},
			text2SemiBoldItalic: {
				fontSize: '2xl',
				fontWeight: 600,
				fontStyle: 'italic',
			},
			smallBoldLink: {
				fontSize: 'xs',
				fontWeight: 700,
				textDecoration: 'underline',
				cursor: 'pointer',
			},
		},
	},
});
