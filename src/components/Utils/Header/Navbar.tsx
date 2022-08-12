import React from 'react';
import { MenuItem } from '~/src/utils/processMegaMenu';
import { Box, Container, HStack, VStack } from '../../Theme';
import IdinheiroLogo from '~public/img/idinheiro.svg';
import NavbarOptionsItems from './NavbarOptionsItems';
import NavbarOptions from './NavbarOptions';

interface NavbarProps {
	data?: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = props => {
	const { data: SSRData, ...rest } = props;
	const data = SSRData;

	return (
		<>
			<Box>
				<Box
					css={{
						position: 'relative',
						zIndex: 1,
						paddingTop: 6,
						paddingBottom: 6,
						borderBottomWidth: 2,
						borderBottomColor: 'blue',
						boxShadow: '0 4px 5px 0 #e6effd',
					}}
				>
					<Container>
						<VStack
							css={{
								alignItems: 'stretch',
							}}
						>
							<HStack>
								{/* using the tag a because of an error that break the menu on mobile,  https://github.com/vercel/next.js/issues/20434 */}

								<a href={'https://www.idinheiro.com.br/'}>
									<IdinheiroLogo
										width={'190px'}
										height={'32px'}
										alt={'idinheiro'}
									/>
								</a>

								<Box
									css={{
										display: 'block',
									}}
								>
									<input type={'text'} />
								</Box>
							</HStack>

							<HStack
								css={{
									justifyContent: 'space-between',
									display: 'inline-flex', //BASE NONE
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
						</VStack>
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
