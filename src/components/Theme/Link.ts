import { styled } from '~/src/styles/stitches.config';

export const Link = styled('a', {
	fontFamily: 'Overpass',

	transitionProperty:
		'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;',
	transitionDuration: '150ms',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	cursor: 'pointer',
	color: '#171923',

	'&:hover': {
		color: '#4065ff',
	},

	variants: {
		size: {
			1: {
				fontSize: '$1',
			},
			2: {
				fontSize: '$2',
			},
			3: {
				fontSize: '$3',
			},
		},
	},
});
