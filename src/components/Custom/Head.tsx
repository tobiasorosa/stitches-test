import getConfig from 'next/config';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo, NextSeo } from 'next-seo';

import { getCanonicalUrl } from '~/src/utils/getCanonicalURL';

export function Head(props: HeadProps) {
	const route = useRouter();
	const makeCanonicalUrl = getCanonicalUrl(route);

	const {
		locale,
		title,
		description,
		url,
		siteName,
		imageUrl,
		imageWidth,
		imageHeight,
		saswpSchema,
		canonical,
	} = props;

	const { publicRuntimeConfig } = getConfig();

	return (
		<>
			<DefaultSeo
				title={title ? title : 'iDinheiro - Decisões financeiras inteligentes'}
				description={
					description
						? description
						: 'Ajudamos a simplificar sua jornada financeira. Conheça o iDinheiro e aprenda sobre finanças pessoais, crédito, seguros, contas, investimentos e muito mais.'
				}
				canonical={canonical ? canonical : makeCanonicalUrl}
				openGraph={{
					type: 'website',
					locale: locale ? locale : 'pt_BR',
					url: url ? url : 'https://www.idinheiro.com.br/',
					site_name: siteName ? siteName : 'iDinheiro',
					images: [
						{
							url: imageUrl
								? imageUrl
								: 'https://www.idinheiro.com.br/wp-content/uploads/2020/07/featured-image2.png',
							width: imageWidth ? Number(imageWidth) : 1200,
							height: imageHeight ? Number(imageHeight) : 628,
						},
					],
				}}
				twitter={{
					site: '@i_dinheiro',
					cardType: 'summary_large_image',
				}}
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0',
					},
				]}
				additionalLinkTags={[
					{
						rel: 'icon',
						href: 'https://www.idinheiro.com.br/wp-content/uploads/2020/06/cropped-favicon-150x150.png',
						sizes: '32x32',
					},
					{
						rel: 'icon',
						href: 'https://www.idinheiro.com.br/wp-content/uploads/2020/06/cropped-favicon-300x300.png',
						sizes: '192x192',
					},
					{
						rel: 'apple-touch-icon',
						href: 'https://www.idinheiro.com.br/wp-content/uploads/2020/06/cropped-favicon-300x300.png',
					},
				]}
			/>

			<NextSeo
				noindex={
					publicRuntimeConfig.nodeEnv === 'development' ||
					publicRuntimeConfig.appEnv === 'staging'
						? true
						: false
				}
				nofollow={
					publicRuntimeConfig.nodeEnv === 'development' ||
					publicRuntimeConfig.appEnv === 'staging'
						? true
						: false
				}
				robotsProps={{
					maxSnippet: -1,
					maxImagePreview: 'large',
					maxVideoPreview: -1,
				}}
			/>

			<NextHead>
				{saswpSchema && (
					<script
						type={'application/ld+json'}
						key={'saswp-custom-schema-markup-output'}
						className={'saswp-custom-schema-markup-output'}
						dangerouslySetInnerHTML={{ __html: saswpSchema }}
					/>
				)}
			</NextHead>
		</>
	);
}
