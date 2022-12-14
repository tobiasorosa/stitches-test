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
		variant: {
			underline: {
				textDecoration: 'underline',
			},

			'social-link': {
				position: 'relative',
				width: '2em',
				height: '2em',
				borderRadius: '50%',
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '1.25rem',
				backgroundColor: '#373737',

				'&:focus': {
					boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
				},
			},
		},
	},
});
