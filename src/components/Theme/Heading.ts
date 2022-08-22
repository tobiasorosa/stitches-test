import { styled } from '~/src/styles/stitches.config';

export const Heading = styled('h1', {
	color: '$primary-gray',

	defaultVariants: {
		size: '4xl',
	},

	variants: {
		for: {
			title: {
				fontWeight: 600,
				color: '#2D3748',
				display: 'inline',
				backgroundImage:
					'linear-gradient(to top, #e5efff 35%, transparent 35%)',
				textTransform: 'uppercase',
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
