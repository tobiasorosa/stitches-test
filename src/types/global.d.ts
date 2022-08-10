export declare global {
	interface WordPressMetaData {
		pageId?: number;
		pageType?: string;
		configAd?: JsonData;
		productInfo?: JsonData[];
		genericCallProducts?: JsonData[];
		related?: WP.Noticia[] | WP.Calculadora[] | WP.Tabela[] | WP.Post[];
	}
}
