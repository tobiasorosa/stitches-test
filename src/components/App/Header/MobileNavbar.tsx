import { Button, Stack } from '../../Theme';
import MenuIcon from '~public/img/icons/hamburger-menu.svg';
import { useEffect, useRef, useState } from 'react';
import { assertIsNode } from '~/src/utils/assertIsNode';
import { Modal } from '../../Layouts/Modal';
import { MobileNavbarStack } from './MobileNavbarStack';

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>
				<MenuIcon width='1em' height='1em' />
			</Button>

			<Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
				<MobileNavbarStack />
			</Modal>
		</>
	);
};
