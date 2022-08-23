import { Accordion } from 'react-accessible-accordion';
import { AccordionFaq } from './AccordionFaq';

type DataFaqType = {
	data: FaqType[];
};

export interface FaqType {
	index?: number;
	title: string;
	description: string;
	imageUrl?: string;
	imageId?: string;
	isSelected?: false;
}

export const Faq = (props: DataFaqType) => {
	const { data } = props;

	return (
		<>
			<Accordion allowMultipleExpanded allowZeroExpanded>
				{data.map((item: FaqType) => (
					<AccordionFaq title={item.title} key={item.index}>
						<p dangerouslySetInnerHTML={{ __html: item.description }} />
					</AccordionFaq>
				))}
			</Accordion>
		</>
	);
};
