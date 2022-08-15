import { styled } from '~/src/styles/stitches.config';

export const Grid = styled('div', {
	display: 'grid',
	maxWidth: '1024px',
	paddingLeft: '5px',
	paddingRight: '5px',
	paddingTop: '1rem',
	margin: '0 auto',
	'& a': {
		color: '$primary',
	},
});
