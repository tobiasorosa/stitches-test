import { styled } from '~/src/styles/stitches.config';

export const ListItem = styled('li', {
	alignItems: 'center',

	'& svg': {
		width: '1rem',
		height: '1rem',
		display: 'inline-block',
		lineHeight: '1rem',
		flexShrink: 0,
		color: '#718096',
		verticalAlign: 'middle',
	},

	variants: {
		variant: {
			'footer-list': {
				marginBottom: '0.5rem',
			},
		},
	},
});

export const List = styled('ul', {
	listStyleType: 'none',

	variants: {
		variant: {
			'footer-list': {
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'column',
				width: '100%',
			},
		},
	},
});
