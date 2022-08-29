import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import { MenuItem } from '~/src/utils/processMegaMenu';
import { Link, VStack } from '../../../Theme';
import { MobileMenuItems } from './MobileMenuItems';
import { MobileMenuOptions } from './MobileMenuOptions';

export const MobileNavbarAccordion = (props: { data: MenuItem[] }) => {
	const { data } = props;

	return (
		<Accordion allowZeroExpanded allowMultipleExpanded>
			{data?.map(it => (
				<MobileMenuOptions key={it.id} title={it.label}>
					<MobileMenuItems data-items={it.childItems} categoryUrl={it.url} />
				</MobileMenuOptions>
			))}
			{/* <AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						Cartão de Crédito
						<ChevronDown width='1em' height='1em' fontSize='20px' />
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<VStack
						css={{
							alignItems: 'flex-start',
							width: '100%',
							padding: '1rem 0',
						}}
					>
						<Link
							css={{
								textDecoration: 'underline',
								marginBottom: '0.5rem',
								fontWeight: 'bold',
							}}
						>
							Visão geral
						</Link>
						<VStack variant='accordion-items'></VStack>
					</VStack>
				</AccordionItemPanel>
			</AccordionItem> */}
		</Accordion>
	);
};
