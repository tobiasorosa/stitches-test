import { styled } from '~/src/styles/stitches.config';

export const AdsenseBlock = styled('div', {
	display: 'block',

	variants: {
		variant: {
			development: {
				border: '1px dashed blue',
				position: 'relative',
				backgroundColor: 'rgba(190, 227, 248, 0.3)',

				'&::after': {
					content: '"Adsense Area"',
					position: 'absolute',
					top: 0,
					backgroundColor: '#BEE3F8',
					paddingX: '0.5rem',
				},
			},

			production: {},
		},
	},
});
