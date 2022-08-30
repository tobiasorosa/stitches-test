export const globalStyle = {
	'*': {
		margin: 0,
		padding: 0,
	},
	'*, *::before, ::after': {
		borderColor: '#E2E8F0',
		wordWrap: 'break-word',
		borderWidth: 0,
		borderStyle: 'solid',
		boxSizing: 'border-box',
	},
	'*::placeholder': {
		opacity: 0.45,
		color: '#1A202C',
	},
	'html, input': {
		fontFamily: 'Overpass, sans-serif',
	},
	body: {
		fontFamily: 'Overpass, Arial, sans-serif',
		fontWeight: 400,
		color: '#1A202C',
		lineHeight: 1.5,
		minHeight: '100%',
		overflowY: 'scroll',
	},
	a: {
		textDecoration: 'none',
		backgroundColor: 'transparent',
	},
	p: {
		fontSize: '16px',
		marginTop: 0,
	},
	'img, svg': {
		maxWidth: '100%',
		height: 'auto',
	},
	fieldset: {
		minWidth: 0,
		padding: 0,
		margin: 0,
		border: 0,
	},
	'button, input': {
		overflow: 'visible',
		background: 'transparent',
	},
	'button, input, optgroup, select, textarea': {
		fontFamily: 'inherit',
		fontSize: '100%',
		lineHeight: 1.15,
		margin: 0,
	},
};
