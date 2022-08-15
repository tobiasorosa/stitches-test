import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
	theme: {
		fonts: {
			default: 'Overpass',
		},
		colors: {
			primary: '#4065ff',
			white: 'white',
			slate: '#373737',
		},
		fontSizes: {
			1: '14px',
			2: '16px',
			3: '18px',
		},
	},
	media: {
		base: '(max-width: 640px)',
		sm: '(min-width: 640px)',
		md: '(min-width: 768px)',
		lg: '(min-width: 1024px)',
		xl: '(min-width: 1280px)',
		'2xl': '(min-width: 1536px)',
	},
	utils: {
		marginX: (value: number | string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		paddingX: (value: number | string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
	},
});