import { styled } from '~/src/styles/stitches.config';

export const ListItem = styled('li', {
	display: 'inline-flex',
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
});

export const List = styled('ul', {});
