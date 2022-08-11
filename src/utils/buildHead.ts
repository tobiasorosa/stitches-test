import { PostTypeSeo, SaswpSchemaType, TaxonomySeo } from '../types/wp-graphql';

export const buildHead = (
	seo: PostTypeSeo | TaxonomySeo,
	schema?: SaswpSchemaType
) => ({
	title: seo.title ?? null,
	description: seo.metaDesc ?? null,
	canonical: seo.canonical ?? null,
	url: seo.opengraphUrl ?? null,
	siteName: seo.opengraphSiteName ?? null,
	imageUrl: seo.opengraphImage?.sourceUrl ?? null,
	imageWidth: seo.opengraphImage?.mediaDetails?.width ?? null,
	imageHeight: seo.opengraphImage?.mediaDetails?.height ?? null,
	saswpSchema: schema?.json_ld ?? null,
});
