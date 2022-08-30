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
	
	interface HeadProps {
		locale?: string | null;
		title?: string | null;
		description?: string | null;
		url?: string | null;
		siteName?: string | null;
		imageUrl?: string | null;
		imageWidth?: string | number | null;
		imageHeight?: string | number | null;
		saswpSchema?: string;
		canonical?: string;
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
