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
		</Accordion>
	);
};
