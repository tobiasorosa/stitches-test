import { styled } from '~/src/styles/stitches.config';

export const Heading = styled('h1', {
	display: 'inline',
	color: '#2D3748',
	fontSize: '$4xl',

	variants: {
		variant: {
			main: {
				backgroundImage:
					'linear-gradient(to top, #e5efff 35%, transparent 35%)',
				textTransform: 'uppercase',
				fontWeight: 600,
				fontSize: '$2xl',
				lineHeight: '45px',

				'@md': {
					fontSize: '$3xl',
					lineHeight: '45px',
				},
				'@lg': {
					fontSize: '$4xl',
					lineHeight: '45px',
				},
			},
			title: {
				fontSize: '$2xl',
			},
			subtitle: {
				fontSize: '$xl',
			},
			title1Bold: {
				fontSize: '$6xl',
				fontWeight: 700,
			},
			title2Bold: {
				fontSize: '$5xl',
				fontWeight: 700,
			},
			subtitle1SemiBold: {
				fontSize: '$4xl',
				fontWeight: 600,
			},
			subtitle2SemiBold: {
				fontSize: '$2xl',
				fontWeight: 600,
			},
		},

		color: {
			white: {
				color: '$white',
			},
			black: {
				color: 'black',
			},
		},

		align: {
			center: {
				textAlign: 'center',
				display: 'inline',
			},
			justify: {
				textAlign: 'justify',
			},
		},

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
	},
});
