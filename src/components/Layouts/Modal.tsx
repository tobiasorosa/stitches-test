import { Box, Button, ModalContainer, ModalMenu, ModalOverlay } from '../Theme';
import CloseIcon from '~public/img/icons/close-icon.svg';
import { Portal } from './Portal';

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	handleClose: () => void;
}

export const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<Portal wrapperId='react-portal-modal-container'>
			<Box>
				<ModalOverlay />
				<ModalContainer>
					<div
						data-focus-guard='true'
						tabIndex={1}
						style={{
							width: '1px',
							height: '0px',
							padding: '0px',
							overflow: 'hidden',
							position: 'fixed',
							top: '1px',
							left: '1px',
						}}
					></div>
					<div
						data-focus-guard='true'
						tabIndex={1}
						style={{
							width: '1px',
							height: '0px',
							padding: '0px',
							overflow: 'hidden',
							position: 'fixed',
							top: '1px',
							left: '1px',
						}}
					></div>
					<Box>
						<ModalMenu>
							<Button variant='menu-close' onClick={handleClose}>
								<CloseIcon width='1em' height='1em' />
							</Button>
							<Box variant='mobile-menu'>{children}</Box>
						</ModalMenu>
					</Box>
				</ModalContainer>
			</Box>
		</Portal>
	);
};
