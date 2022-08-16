import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { CalcWorkingDays } from '~/src/components/Calculators/CalcWorkingDays';
import CalculatorLayout from '~/src/components/Layouts/CalculatorLayout';
import { GET_CALCULATOR } from '~/src/queries/get_calculator';
import {
	Calculadora,
	PostTypeSeo,
	RootQuery,
	SaswpSchemaType,
} from '~/src/types/wp-graphql';
import { authenticatedClient } from '~/src/utils/apollo-client';
import { buildHead } from '~/src/utils/buildHead';
import { getFooter } from '~/src/utils/getFooter';
import { getRelatedCalculatorsById } from '~/src/utils/getRelatedCalculatorsById';
import { idsCalculatorsByCategory } from '~/src/utils/idsCalculatorsByCategory';
import { FooterItem } from '~/src/utils/processFooter';
import { MenuItem, processMegaMenu } from '~/src/utils/processMegaMenu';

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await authenticatedClient(
		`${process.env.WP_JWT_AUTH_TOKEN}`
	).query<RootQuery>({
		query: GET_CALCULATOR,
		variables: { uri: 'calculadora-dias-uteis' },
	});

	const menuData = processMegaMenu(data.menus);
	const { footerData } = await getFooter();

	const nameCategoryCalculator =
		data.calculadora?.calculadorasCategorias?.nodes?.[0]?.name;

	const { idsCalculators } = idsCalculatorsByCategory(nameCategoryCalculator);

	const relatedCalculators =
		data.calculadora?.customFieldCalculadoras?.relacionadas ??
		(await getRelatedCalculatorsById(idsCalculators));

	const meta: WordPressMetaData = {
		pageId: data.calculadora?.calculadoraId ?? 0,
		pageType: data.calculadora?.__typename,
		related: relatedCalculators as Calculadora[],
	};

	const seo: PostTypeSeo = data?.calculadora?.seo ?? {};
	const schema: SaswpSchemaType = data.calculadora?.saswpSchema ?? {};

	const defaultProps = {
		props: {
			head: buildHead(seo, schema),
			data: data.calculadora ?? {},
			menuData,
			footerData,
			meta,
		},
	};

	return defaultProps;
};

interface CalculatorPageProps {
	data: Calculadora;
	meta: WordPressMetaData;
	menuData: MenuItem[];
	footerData: FooterItem[];
}

const Home: NextPage<CalculatorPageProps> = props => {
	const { data, meta, menuData, footerData } = props;

	return (
		<>
			<CalculatorLayout
				data={data}
				meta={meta}
				menuData={menuData}
				footerData={footerData}
			>
				<CalcWorkingDays />
			</CalculatorLayout>
		</>
	);
};

export default Home;
