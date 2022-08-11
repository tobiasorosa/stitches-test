import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '~/src/styles/stitches.config';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<style
						id='stitches'
						dangerouslySetInnerHTML={{ __html: getCssText() }}
					/>

					<meta name={'theme-color'} content={'#000000'} />

					<link rel={'preload'} as={'style'} href={'/fonts/fonts.css'} />

					<link rel={'stylesheet'} href={'/fonts/fonts.css'} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
