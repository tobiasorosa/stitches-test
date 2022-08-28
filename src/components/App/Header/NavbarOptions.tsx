import { Box, Button, Container, Link } from '../../Theme';
import ChevronDown from '~public/img/icons/chevron-down.svg';

interface NavbarOptionsProps {
	title: string;
	categoryUrl: string;
	children: React.ReactElement;
}

const NavbarOptions: React.FC<NavbarOptionsProps> = props => {
	const { title, categoryUrl, children } = props;

	return (
		<Box
			css={{
				'&:hover': {
					'& div div': { display: 'flex' },
					'& svg': { transform: 'rotate(180deg)' },
					backgroundColor: '#e5efff',
				},
			}}
		>
			<Link href={categoryUrl} className='menu_item_category'>
				<Button variant='menu'>
					<Box
						css={{
							marginInline: '0.25rem',

							'@xl': {
								fontSize: '0.875rem',
							},
						}}
					>
						{title}
					</Box>
					<ChevronDown width='1em' />
				</Button>
			</Link>

			<Box
				css={{
					position: 'absolute',
					left: 0,
					right: 0,
				}}
			>
				<Box
					css={{
						padding: '0.5rem',
						background: '#e5efff',
						boxShadow:
							'0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);',
						userSelect: 'none',
						width: '100%',
						display: 'none',
					}}
				>
					<Container>{children}</Container>
				</Box>
			</Box>
		</Box>
	);
};

export default NavbarOptions;
