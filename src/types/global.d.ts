export declare global {
	interface WordPressMetaData {
		pageId?: number;
		pageType?: string;
		configAd?: JsonData;
		productInfo?: JsonData[];
		genericCallProducts?: JsonData[];
		related?: WP.Noticia[] | WP.Calculadora[] | WP.Tabela[] | WP.Post[];
	}
	
	interface Window {
		adsbygoogle: { [key: string]: unknown }[];
	}
	
	interface List {
		id?: string | number;
		name?: string;
	}

	namespace JSX {
		interface AmpImg {
			alt?: string;
			src?: string;
			width?: string;
			height?: string;
			layout?: string;
			margin?: string;
			class?: string;
		}
		interface IntrinsicElements {
			'amp-img': AmpImg;
		}
	}
}
