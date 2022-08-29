import React from 'react';
import {
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import ChevronDown from '~/public/img/icons/chevron-down.svg';

interface MobileMenuOptionsProps {
	title: string;
	children: React.ReactNode;
}

export const MobileMenuOptions = (props: MobileMenuOptionsProps) => {
	const { title, children } = props;

	return (
		<AccordionItem>
			<AccordionItemButton>
				{title}

				<ChevronDown width='1em' height='1em' fontSize='20px' />
			</AccordionItemButton>

			<AccordionItemPanel>{children}</AccordionItemPanel>
		</AccordionItem>
	);
};
