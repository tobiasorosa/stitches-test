import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '~/src/styles/stitches.config';

const noAdsensePages = [
	'/',
	'/busca',
	'/noticias',
	'/quem-somos',
	'/codigo-editorial',
	'/politica-de-privacidade',
	'/contato',
	'/redirect',
	'/negocios/lista-de-maquininhas',
	'/investimentos/list-de-corretoras',
	'/emprestimos/lista-de-emprestimos',
	'/cartao-de-credito/lista-de-cartoes',
	'/contas/lista-de-contas',
	'/cartao-de-credito/comparador-de-cartoes',
	'/contas/comparador-de-contas',
	'/investimentos/comparador-de-corretoras',
	'/financiamentos/lista-de-financiamentos-de-veiculos',
	'/financiamentos/lista-de-financiamentos-imobiliario',
];

export default class Document extends NextDocument {
	isAmp = this.props.__NEXT_DATA__.query.amp;
	pathname = this.props.__NEXT_DATA__.page;

	hasAdsense = noAdsensePages.includes(this.pathname);

	render() {
		return (
			<Html lang='en'>
				<Head>
					<style
						id='stitches'
						dangerouslySetInnerHTML={{ __html: getCssText() }}
					/>

					<meta name={'theme-color'} content={'#000000'} />

					{this.isAmp ? (
						<script
							async
							custom-element={'amp-analytics'}
							src={'https://cdn.ampproject.org/v0/amp-analytics-0.1.js'}
						/>
					) : (
						// eslint-disable-next-line @next/next/next-script-for-ga
						<script
							dangerouslySetInnerHTML={{
								__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MP2SGPR');`,
							}}
						/>
					)}

					{this.isAmp ? (
						// eslint-disable-next-line @next/next/google-font-display
						<link
							rel={'stylesheet'}
							href={
								'https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;600;800'
							}
						/>
					) : (
						<>
							<link rel={'preload'} as={'style'} href={'/fonts/fonts.css'} />

							<link rel={'stylesheet'} href={'/fonts/fonts.css'} />
						</>
					)}

					{!this.hasAdsense && (
						<script
							async
							src={
								'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1602723282047782'
							}
							crossOrigin={'anonymous'}
						/>
					)}

					{!this.hasAdsense && (
						<link rel={'preconnect'} href={'//pagead2.googlesyndication.com'} />
					)}

					{!this.hasAdsense && (
						<link rel={'dns-prefetch'} href={'//adservice.google.com'} />
					)}

					{!this.hasAdsense && (
						<link rel={'dns-prefetch'} href={'//adservice.google.com.br'} />
					)}

					{!this.hasAdsense && (
						<link rel={'dns-prefetch'} href={'//tpc.googlesyndication.com'} />
					)}
				</Head>
				<body>
					{this.isAmp ? (
						// @ts-ignore
						<amp-analytics
							config={
								'https://www.googletagmanager.com/amp.json?id=GTM-KDQM5Z4'
							}
							data-credentials={'include'}
						/>
					) : (
						<noscript
							dangerouslySetInnerHTML={{
								__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MP2SGPR"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
							}}
						/>
					)}

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
