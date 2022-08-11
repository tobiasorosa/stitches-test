import { NextPage } from 'next';
import Image from 'next/image';
import { useMemo } from 'react';
import { Calculadora } from '~/src/types/wp-graphql';

import { FooterItem } from '~/src/utils/processFooter';
import { MenuItem } from '~src/utils/processMegaMenu';

/**
 * Since the page name 'does not' use catch-all routes,
 * for example [slug],
 * that's why params would contain just slug and not an array of slugs , unlike [...slug].
 * For example, If we need to have dynamic route '/foo/'
 * Then we would add paths: [ params: { slug: 'foo' } } ]
 * Here slug will be 'foo', then Next.js will statically generate the page at /foo/
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 */

interface LayoutCalculatorPageProps {
	data: Calculadora;
	meta: WordPressMetaData;
	menuData: MenuItem[];
	children: React.ReactElement | React.ReactElement[];
	footerData?: FooterItem[];
}

const LayoutCalculatorPage: NextPage<LayoutCalculatorPageProps> = props => {
	const { data, meta, menuData, children, footerData } = props;

	const breadcrumbs = useMemo(
		() => data.seo?.breadcrumbs?.slice(0, -1) ?? [],
		[data]
	);

	return (
		<>
			<Stack spacing={8}>
				<Navbar data={menuData} />

				<Container>
					<Stack spacing={8}>
						{breadcrumbs && <Breadcrumb items={breadcrumbs} />}

						<LayoutArea>
							<LayoutArea.Content>
								<Stack>
									<EditorialResponsibility isCalculator={true} />

									<Heading as={'h1'} variant={'main'}>
										{data.title}
									</Heading>
								</Stack>

								{data.customFieldCalculadoras?.subtituloCalculadora && (
									<Text as={'strong'} fontSize={'md'} fontWeight={'bold'}>
										{data.customFieldCalculadoras.subtituloCalculadora}
									</Text>
								)}

								{children}
							</LayoutArea.Content>

							<LayoutArea.Sidebar>
								<Adsense
									slot={meta?.configAd?.Calculadora?.topSidebar?.id_block}
									format={'vertical'}
								/>
							</LayoutArea.Sidebar>
						</LayoutArea>

						<LayoutArea>
							<LayoutArea.Content>
								<WpContent html={data?.content ?? ''} meta={meta} />

								<CardRelatedContentSimulate />
							</LayoutArea.Content>

							<LayoutArea.Sidebar>
								<Adsense
									slot={meta?.configAd?.Calculadora?.bottomSidebar?.id_block}
									format={'vertical'}
								/>
							</LayoutArea.Sidebar>
						</LayoutArea>
					</Stack>
				</Container>

				<Footer data={footerData} />
			</Stack>
		</>
	);
};

export default LayoutCalculatorPage;
