import { Button, Stack } from '../../../Theme';
import MenuIcon from '~public/img/icons/hamburger-menu.svg';
import { useState } from 'react';
import { NavbarModal } from './NavbarModal';
import { Search } from '../Search';
import { MobileNavbarAccordion } from './MobileNavbarAccordion';
import { MenuItem } from '~/src/utils/processMegaMenu';

export const MobileNavbar = (props: { data: MenuItem[] }) => {
	const { data } = props;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button
				onClick={() => setIsOpen(true)}
				color='transparent'
				variant='mobile-navbar'
			>
				<MenuIcon width='1em' height='1em' />
			</Button>

			<NavbarModal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
				<Stack
					css={{
						flexDirection: 'column',
						paddingY: '2rem',
					}}
				>
					<Search />

					<MobileNavbarAccordion data={data} />
				</Stack>
			</NavbarModal>
		</>
	);
};
