import React from 'react';
import { MenuItem } from '~/src/utils/processMegaMenu';
import { Box, Container, HStack, Link, Stack, VStack } from '../../Theme';
import IdinheiroLogo from '~public/img/idinheiro.svg';
import NavbarOptionsItems from './NavbarOptionsItems';
import NavbarOptions from './NavbarOptions';
import { Search } from './Search';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';
import mockMenuData from '~mocks/wp/mega-menu.json';

interface NavbarProps {
	data?: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = props => {
	const { data: SSRData, ...rest } = props;
	const data = SSRData || (mockMenuData as MenuItem[]);

	return (
		<>
			<Box>
				<Box
					css={{
						position: 'relative',
						zIndex: 1,
						paddingTop: '1.5rem',
						paddingBottom: '1.5rem',
						borderBottomWidth: 2,
						borderBottomColor: '#e5efff',
						boxShadow: '0 4px 5px 0 #e6effd',

						'@lg': {
							paddingBottom: 0,
						},
					}}
				>
					<Container variant='navbar'>
						<Stack variant='navbar'>
							<HStack>
								{/* using the tag a because of an error that break the menu on mobile,  https://github.com/vercel/next.js/issues/20434 */}

								<Link
									href={'https://www.idinheiro.com.br/'}
									css={{
										display: 'inherit',
										'@lg': {
											height: '32px',
										},
									}}
								>
									<IdinheiroLogo
										width={'190px'}
										height={'32px'}
										alt={'idinheiro'}
									/>
								</Link>

								<Box variant='separator' />

								<Box
									css={{
										display: 'none',

										'@lg': {
											display: 'block',
										},
									}}
								>
									<Search />
								</Box>

								<Box
									css={{
										display: 'block',

										'@lg': {
											display: 'none',
										},
									}}
								>
									<MobileNavbar data={data} />
								</Box>
							</HStack>

							<HStack
								css={{
									justifyContent: 'space-between',
									display: 'none',
									marginTop: '2rem',

									'@lg': {
										display: 'inline-flex',
									},
								}}
							>
								{data?.map(it => (
									<NavbarOptions
										key={it.id}
										title={it.label}
										categoryUrl={it.url}
									>
										<NavbarOptionsItems data-items={it.childItems} />
									</NavbarOptions>
								))}
							</HStack>
						</Stack>
					</Container>
				</Box>
			</Box>
		</>
	);
};

export default Navbar;
