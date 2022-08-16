import type { AppProps } from 'next/app';
import { globalCss } from '~/src/styles/stitches.config';

const globalStyles = globalCss({
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
	'html, input': {
		fontFamily: 'Overpass, sans-serif',
	},
	body: {
		fontFamily: 'Overpass, Arial, sans-serif',
		fontWeight: 400,
		color: '#1A202C',
	},
	a: {
		textDecoration: 'none',
		backgroundColor: 'transparent',
	},
	p: {
		fontSize: '16px',
		marginTop: 0,
		marginBottom: '1rem',
	},
	'img, svg': {
		maxWidth: '100%',
		height: 'auto',
	},
	'ul, ol': {
		listStylePosition: 'inside',
	},
	li: {
		marginBottom: '0.625rem',
	},
	fieldset: {
		minWidth: 0,
		padding: 0,
		margin: 0,
		border: 0,
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	return <Component {...pageProps} />;
}

export default MyApp;
