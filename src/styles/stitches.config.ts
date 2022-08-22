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
			'primary-gray': '#2D3748',
		},
		fontSizes: {
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem',
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