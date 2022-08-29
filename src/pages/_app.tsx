import type { AppProps } from 'next/app';
import { globalCss } from '~/src/styles/stitches.config';
import 'reflect-metadata';
import { wpStyle } from '../styles/wpStyle';

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
	'.react-datepicker-wrapper': {
		'& input': {
			width: '100%',
			height: '2.5rem',
			outline: '2px solid transparent',
			outlineOffset: '2px',
			appearance: 'none',
			fontSize: '$md',
			paddingInline: '1rem',
			borderRadius: '0.375rem',
			background: '#E5EFFF',
		},
	},
	...wpStyle,

	'.accordion': {
		marginTop: '1.5rem',
	},

	'.accordion__item': {
		borderTopWidth: '1px',
		overflowAnchor: 'none',
		marginInline: '-1.5rem',

		'&:last-of-type': {
			borderBottomWidth: '1px',
		},
	},
	'.accordion__button': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		fontSize: '1rem',
		paddingInline: '1rem',
		paddingY: '0.5rem',

		'& svg': {
			display: 'inline-block',
			lineHeight: '1em',
			flexShrink: 0,
			opacity: 1,
			transition: 'transform 0.2s ease 0s',
			transformOrigin: 'center center',
			fontSize: '1.25em',
			verticalAlign: 'middle',
		},

		'&[aria-expanded="true"]': {
			'& svg': {
				transform: 'rotate(-180deg)',
			},
		},

		'&:focus': {
			boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
		},
	},
	'.accordion__panel': {
		overflow: 'initial',
		opacity: 1,
		height: 'auto',
		paddingTop: '1rem',
		paddingBottom: '1.25rem',
		paddingInline: '1rem',
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	return <Component {...pageProps} />;
}

export default MyApp;
