import React from 'react';
import { MenuItem } from '~/src/utils/processMegaMenu';
import { Box, Container, HStack, Stack, VStack } from '../../Theme';
import IdinheiroLogo from '~public/img/idinheiro.svg';
import NavbarOptionsItems from './NavbarOptionsItems';
import NavbarOptions from './NavbarOptions';
import { Search } from './Search';

interface NavbarProps {
	data?: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = props => {
	const { data: SSRData, ...rest } = props;
	const data = SSRData;
	console.log(data);

	return (
		<>
			<Box>
				<Box
					css={{
						position: 'relative',
						zIndex: 1,
						paddingTop: '1.5rem',
						paddingBottom: 6,
						borderBottomWidth: 2,
						borderBottomColor: 'e5efff',
						boxShadow: '0 4px 5px 0 #e6effd',

						'@lg': {
							paddingBottom: 0,
						},
					}}
				>
					<Container for='navbar'>
						<Stack for='navbar-container'>
							<Stack for='navbar'>
								<HStack>
									{/* using the tag a because of an error that break the menu on mobile,  https://github.com/vercel/next.js/issues/20434 */}

									<a href={'https://www.idinheiro.com.br/'}>
										<IdinheiroLogo
											width={'190px'}
											height={'32px'}
											alt={'idinheiro'}
										/>
									</a>

									<Box for='separator' />

									<Box
										css={{
											'@base': {
												display: 'none',
											},
											'@lg': {
												display: 'block',
											},
										}}
									>
										<Search />
									</Box>
								</HStack>

								<HStack
									css={{
										justifyContent: 'space-between',
										display: 'inline-flex', //BASE NONE
										marginTop: '2rem',

										'@base': {
											display: 'none',
										},
									}}
								>
									{data?.map(it => (
										<>
											<NavbarOptions
												key={it.id}
												title={it.label}
												categoryUrl={it.url}
											>
												<NavbarOptionsItems data-items={it.childItems} />
											</NavbarOptions>
										</>
									))}
								</HStack>
							</Stack>
						</Stack>
					</Container>
				</Box>
			</Box>

			<Box
				css={{
					display: 'none', //BASE BLOCK
					marginTop: '0px !important',
				}}
			>
				{/* <C.Portal>
					<Local.SideMenu data={data} />
				</C.Portal> */}
			</Box>
		</>
	);
};

export default Navbar;
