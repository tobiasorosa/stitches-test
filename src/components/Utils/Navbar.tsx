import React from 'react';
import { MenuItem } from '~/src/types/wp-graphql';

const Navbar: React.FC = (props: { data?: MenuItem[] }) => {
	const { data: SSRData, ...rest } = props;
	const data = SSRData;

	return (
		<>
			<C.Box sx={styles} {...rest}>
				<C.Box
					position={'relative'}
					zIndex={1}
					pt={6}
					pb={{ base: 6, lg: isAmp ? 6 : 0 }}
					borderBottomWidth={2}
					borderBottomColor={bgHighlightColorMode}
					boxShadow={'0 4px 5px 0 #e6effd'}
				>
					<C.Container>
						<C.VStack align={'stretch'} spacing={8}>
							<C.HStack>
								{/* using the tag a because of an error that break the menu on mobile,  https://github.com/vercel/next.js/issues/20434 */}

								<a href={'https://www.idinheiro.com.br/'}>
									<IdinheiroLogo
										width={'190px'}
										height={'32px'}
										alt={'idinheiro'}
									/>
								</a>

								<C.Spacer />

								<Box display={{ base: 'none', lg: 'block' }}>
									<App.Search />
								</Box>

								<C.IconButton
									display={{ base: 'block', lg: 'none' }}
									onClick={drawer.onOpen}
									variant={'ghost'}
									aria-label={'Menu'}
									icon={<I.HamburgerIcon />}
								/>
							</C.HStack>

							<C.HStack
								justify={'space-between'}
								display={{ base: 'none', lg: 'inline-flex' }}
							>
								{data?.map(it => (
									<Local.MenuOptions
										key={it.id}
										title={it.label}
										categoryUrl={it.url}
									>
										<Local.MenuOptionsItems data-items={it.childItems} />
									</Local.MenuOptions>
								))}
							</C.HStack>
						</C.VStack>
					</C.Container>
				</C.Box>
			</C.Box>

			<C.Box
				display={{ base: 'block', lg: 'none' }}
				style={{ marginTop: '0px !important' }}
			>
				<C.Portal>
					<Local.SideMenu data={data} />
				</C.Portal>
			</C.Box>
		</>
	);
};

export default Navbar;
