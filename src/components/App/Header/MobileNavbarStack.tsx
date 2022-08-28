import { Stack } from '../../Theme';
import { MobileNavbarAccordion } from './MobileNavbarAccordion';
import { Search } from './Search';

export const MobileNavbarStack = () => {
	return (
		<Stack
			css={{
				flexDirection: 'column',
				paddingY: '2rem',
			}}
		>
			<Search />

			<MobileNavbarAccordion />
		</Stack>
	);
};
