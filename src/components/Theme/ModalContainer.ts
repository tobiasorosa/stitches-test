import { styled } from '~src/styles/stitches.config';

export const ModalContainer = styled('div', {
	display: 'flex',
	height: '100vh',
	position: 'fixed',
	left: '0px',
	top: '0px',
	zIndex: 999,
	justifyContent: 'center',
});

export const ModalOverlay = styled('div', {
	position: 'fixed',
	left: '0px',
	top: '0px',
	width: '100vw',
	height: '100vh',
	background: 'rgba(0, 0, 0, 0.48)',
	zIndex: 999,
	opacity: 1,
});

export const ModalMenu = styled('div', {
	position: 'fixed',
	right: '0px',
	top: '0px',
	bottom: '0px',
	width: '100%',
	maxWidth: '20rem',
	boxShadow:
		'0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);',
	transform: 'translateX(0%) translateZ(0px)',
	maxHeight: '100vh',
	backgroundColor: '#FFFFFF',
	display: 'flex',
	flexDirection: 'column',
	transition: 'all 0.3s ease-in-out',
	overflow: 'hidden',
	zIndex: 999,
});
