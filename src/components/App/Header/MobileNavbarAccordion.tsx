import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import ChevronDown from '~/public/img/icons/chevron-down.svg';

export const MobileNavbarAccordion = () => {
	return (
		<Accordion allowZeroExpanded allowMultipleExpanded>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						Cartão de Crédito
						<ChevronDown width='1em' height='1em' fontSize='20px' />
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>Teste</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
};
