import CalendarIcon from '~public/img/icons/calendar.svg';
import { Box } from '../../Theme';

export interface SVGAddonProps {
	icon: string;
}

export const SVGAddon = (props: SVGAddonProps) => {
	const { icon } = props;

	return (
		<Box variant='svg-addon'>
			{icon === 'calendar' && <CalendarIcon width='18px' />}
		</Box>
	);
};
