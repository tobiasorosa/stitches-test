import { styled } from '~/src/styles/stitches.config';

export const HeaderStack = styled('div', {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	paddingTop: '3rem',
	paddingBottom: '4.5rem',
	backgroundImage: 'linear-gradient(to bottom, black, $slate 50%)',
});
