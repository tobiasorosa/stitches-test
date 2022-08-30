import type { AppProps } from 'next/app';
import { globalCss } from '~/src/styles/stitches.config';
import 'reflect-metadata';
import { Head } from '../components/Custom/Head';
import {
	accordionStyle,
	datePickerStyle,
	globalStyle,
	wpStyle,
} from '../styles';

const globalStyles = globalCss({
	...globalStyle,
	...datePickerStyle,
	...wpStyle,
	...accordionStyle,
});

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	return (
		<>
			{/* <Head {...pageProps.head} /> */}
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
