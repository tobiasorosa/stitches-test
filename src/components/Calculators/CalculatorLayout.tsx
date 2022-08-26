import { NextPage } from 'next';
import { useMemo } from 'react';
import { Calculadora } from '~/src/types/wp-graphql';

import { FooterItem } from '~/src/utils/processFooter';
import { MenuItem } from '~src/utils/processMegaMenu';
import { Heading } from '../Theme';
import { Container } from '../Theme/Container';
import Navbar from '../App/Header/Navbar';
import { Box, Stack, Text } from '../Theme';
import Breadcrumb from '../App/Header/Breadcrumb';
import { LayoutArea } from '~/src/components/Calculators/LayoutArea';
import {
	// CardRelatedContentSimulate,
	Context,
	ContextProps,
} from '~src/components/Calculators/Context';
import { WpContent } from '../App/WpContent';
import { Adsense } from '../Custom/Adsense';
import { CardRelatedContentSimulate } from '../Custom/CardRelatedContentSimulate';
import { Footer } from '../App/Footer/Footer';

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

	const defaultValue: ContextProps = {
		data,
		meta,
		customFieldCalculator: data.customFieldCalculadoras,
	};

	return (
		<Context.Provider value={defaultValue}>
			<Box
				css={{
					height: 'auto',
				}}
			>
				<Navbar data={menuData} />

				<Container
					css={{
						marginTop: '2rem',
						height: 'auto',
					}}
				>
					<Stack
						css={{
							flexDirection: 'column',
							height: 'auto',
						}}
					>
						{breadcrumbs && <Breadcrumb items={breadcrumbs} />}

						<LayoutArea>
							<LayoutArea.Content>
								<Stack
									css={{
										flexDirection: 'column',
									}}
								>
									<Heading>
										<Heading variant='main' as='span'>
											{data.title}
										</Heading>
									</Heading>
								</Stack>

								{data.customFieldCalculadoras?.subtituloCalculadora && (
									<Text variant='subtitle' as='strong'>
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
			</Box>
		</Context.Provider>
	);
};

export default CalculatorLayout;
