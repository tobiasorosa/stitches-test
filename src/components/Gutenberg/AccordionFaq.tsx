import React from 'react';
import { Text } from '../Theme';

import {
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import Image from 'next/image';

export interface AccordionItemProps {
	title?: string;
	image?: string;
	altImage?: string;
	children?: React.ReactNode;
}

export const AccordionFaq = (props: AccordionItemProps) => {
	const { title, image, altImage, children, ...rest } = props;

	return (
		<AccordionItem>
			<AccordionItemButton
			// focus={{ borderColor: 'none' }}
			>
				{image && (
					<Image
						src={`${image}`}
						alt={`${altImage}`}
						width={'40px'}
						height={'40px'}
						style={{
							borderRadius: '9999px',
						}}
					/>
				)}

				<Text
					variant={'text2Bold'}
					css={{
						flex: 1,
						textAlign: 'left',
						marginLeft: '0.5rem',
					}}
				>
					{title}
				</Text>
			</AccordionItemButton>

			<AccordionItemPanel>{children}</AccordionItemPanel>
		</AccordionItem>
	);
};
