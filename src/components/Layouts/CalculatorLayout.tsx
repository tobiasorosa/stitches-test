import { NextPage } from 'next';
import Image from 'next/image';
import { useMemo } from 'react';
import { Calculadora } from '~/src/types/wp-graphql';

import { FooterItem } from '~/src/utils/processFooter';
import { MenuItem } from '~src/utils/processMegaMenu';
import { Heading1 } from '../Theme/Heading-1';
import { Container } from '../Theme/Container';
import { Stack } from '../Theme/Stack';
import Navbar from '../Utils/Header/Navbar';
import { Text } from '../Theme';
import Breadcrumb from '../Utils/Header/Breadcrumb';

interface CalculatorLayoutProps {
	data: Calculadora;
	meta: WordPressMetaData;
	menuData: MenuItem[];
	children: React.ReactElement | React.ReactElement[];
	footerData?: FooterItem[];
}

const CalculatorLayout: NextPage<CalculatorLayoutProps> = props => {
	const { data, meta, menuData, children, footerData } = props;

	const breadcrumbs = useMemo(
		() => data.seo?.breadcrumbs?.slice(0, -1) ?? [],
		[data]
	);

	return (
		<>
			<Stack>
				<Navbar data={menuData} />

				<Container>
					<Stack>
						{breadcrumbs && <Breadcrumb items={breadcrumbs} />}

						<LayoutArea>
							<LayoutArea.Content>
								<Stack>
									<Heading1>{data.title}</Heading1>
								</Stack>

								{data.customFieldCalculadoras?.subtituloCalculadora && (
									<Text>
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

export default CalculatorLayout;
