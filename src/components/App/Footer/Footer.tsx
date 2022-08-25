import { useRouter } from 'next/router';
import React from 'react';

import { FooterItem, NodeWp } from '~/src/utils/processFooter';
import Facebook from '~public/img/icons/social/facebook-f-brands.svg';
import Instagram from '~public/img/icons/social/instagram.svg';
import Linkedin from '~public/img/icons/social/linkedin-in-brands.svg';
import Telegram from '~public/img/icons/social/telegram-plane-brands.svg';
import Twitter from '~public/img/icons/social/twitter-brands.svg';
import IdinheiroLogo from '~public/img/idinheiro.svg';
import {
	Box,
	Container,
	HStack,
	Link,
	List,
	ListItem,
	Stack,
	Text,
	VStack,
} from '../../Theme';

export function Footer(props: { data?: FooterItem[]; groupCash?: [NodeWp][] }) {
	const { data, groupCash, ...rest } = props;
	const { pathname } = useRouter();

	const SocialLink = (props: {
		href: string;
		label: string;
		children?: React.ReactNode;
	}) => {
		const { href, label, children } = props;

		return (
			<Link
				variant='social-link'
				href={href}
				target='_blank'
				aria-label={label}
			>
				{children}
			</Link>
		);
	};

	const renameId = (nameItem: string, titleBlock: string) => {
		const modifyingName = nameItem
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '_');

		const modifyingTitle = titleBlock
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '_');

		const newNameId = `footer_item_${modifyingTitle}_${modifyingName}`;

		return { newNameId };
	};

	return (
		<Box>
			<Box
				css={{
					paddingY: '2rem',
					background: '#e5efff',
				}}
			>
				<Container>
					<VStack
						css={{
							alignItems: 'flex-start',
							flexDirection: 'row',

							'@lg': {
								alignItems: 'center',
								flexDirection: 'column',
							},
						}}
					>
						<Stack
							css={{
								flex: 1,
								alignItems: 'flex-start',
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-between',

								'@lg': {
									alignItems: 'center',
									flexDirection: 'column',
								},
							}}
						>
							<Stack
								css={{
									flexDirection: 'row',
									alignItems: 'center',
									gridGap: '10px',

									'@lg': {
										flexDirection: 'column',
									},
								}}
							>
								<IdinheiroLogo
									width={'190px'}
									height={'32px'}
									alt={'idinheiro'}
								/>

								<Box
									css={{
										'@lg': {
											padding: '0.5rem',
											borderLeft: '1px solid',
										},
									}}
								>
									<Text
										css={{
											fontSize: '12px',
										}}
									>
										TUDO O QUE IMPORTA PARA O SEU DINHEIRO.
									</Text>
								</Box>
							</Stack>

							<HStack>
								<SocialLink
									href={'https://www.instagram.com/idinheiro/'}
									label={'instagram'}
								>
									<Instagram
										fill={'currentColor'}
										stroke={'currentColor'}
										width={'24px'}
										height={'24px'}
									/>
								</SocialLink>

								<SocialLink
									href={'https://t.me/idinheiro_noticias'}
									label={'telegram'}
								>
									<Telegram
										fill={'currentColor'}
										stroke={'currentColor'}
										width={'24px'}
										height={'24px'}
									/>
								</SocialLink>

								<SocialLink
									href={'https://www.linkedin.com/company/idinheiro/'}
									label={'linkedin'}
								>
									<Linkedin
										fill={'currentColor'}
										stroke={'currentColor'}
										width={'24px'}
										height={'24px'}
									/>
								</SocialLink>

								<SocialLink
									href={'https://www.facebook.com/idinheirooficial/'}
									label={'facebook'}
								>
									<Facebook
										fill={'currentColor'}
										stroke={'currentColor'}
										width={'24px'}
										height={'24px'}
									/>
								</SocialLink>

								<SocialLink
									href={'https://twitter.com/i_dinheiro'}
									label={'twitter'}
								>
									<Twitter
										fill={'currentColor'}
										stroke={'currentColor'}
										width={'24px'}
										height={'24px'}
									/>
								</SocialLink>
							</HStack>
						</Stack>

						<Box
							style={{
								width: '100%',
								border: '1px solid #0071ff',
								backgroundColor: '#0071ff',
							}}
						/>

						<Stack
							css={{
								width: '100%',
								alignItems: 'flex-start',
								flexDirection: 'row',

								'@md': {
									alignItems: 'center',
									flexDirection: 'column',
								},
							}}
						>
							{data?.map((item, i) => (
								<Stack
									css={{
										alignItems: 'flex-start',
										width: '100%',
										marginLeft: 0,
									}}
									key={i}
								>
									<Text
										css={{
											marginbottom: '0.5rem',
											fontWeight: 'bold',
											textTransform: 'uppercase',
											color: '#0071ff',
										}}
									>
										{item.name}
									</Text>

									<HStack
										css={{
											width: '100%',
										}}
									>
										<List
											css={{
												display: 'flex',
												flexWrap: 'wrap',
												flexDirection: 'column',
												height: '245px',
												width: '100%',

												'@base': {
													height: i === 1 ? '100%' : '245px',
													width: i === 1 ? '440px' : '100%',
												},
												'@md': {
													height: '100%',
												},
											}}
										>
											{item.items.map(({ node }, index) => {
												const { newNameId } = renameId(node.label, item.name);

												return (
													<ListItem
														key={index}
														css={{
															marginbottom: '0.5rem',
														}}
													>
														<Link
															href={`${node.url}`}
															id={newNameId}
															css={{
																margin: '0px',
																height: '24px',
															}}
														>
															{node.label}
														</Link>
													</ListItem>
												);
											})}
										</List>
									</HStack>
								</Stack>
							))}
						</Stack>

						<Box css={{ marginTop: '30px' }}>
							<Text
								css={{
									fontSize: '12px',
								}}
								dangerouslySetInnerHTML={{
									__html:
										"O iDinheiro tem o propósito de democratizar e simplificar os serviços financeiros. Nossa missão é te ajudar a fazer as melhores escolhas, a partir das mais completas informações e recomendações sobre cada serviço. Acreditamos que transparência, correção e cuidado são fundamentais para cumprirmos nossa missão. Por isso, descrevemos a seguir os princípios que buscam estabelecer nosso <a href='https://www.idinheiro.com.br/codigo-editorial/' style='color: #0071ff;'> compromisso editorial </a>. Como parte do compromisso de transparência e isenção do iDinheiro, acreditamos que também é fundamental deixar sempre muito claro de que forma este site <a href='https://www.idinheiro.com.br/como-o-site-ganha-dinheiro/' style='color: #0071ff;'>busca se manter financeiramente.</a>",
								}}
							/>

							<Text
								css={{
									fontSize: '12px',
									marginTop: '0.5rem',
								}}
								dangerouslySetInnerHTML={{
									__html:
										'O iDinheiro não vende qualquer produto ou serviço financeiro no seu Portal e não é uma instituição financeira, sendo que apenas atua como fonte de informação para seus leitores e como divulgador, veiculando anúncios de produtos e serviços fornecidos pelos Anunciantes. Por essa razão, nós não nos responsabilizamos por nenhuma compra ou transação realizada entre nossos leitores e os Anunciantes/Parceiros.',
								}}
							/>
						</Box>
					</VStack>
				</Container>
			</Box>

			<Box>
				<Container>
					<Text
						css={{
							paddingTop: '2rem',
							paddingBottom: '1rem',
							fontSize: '12px',
						}}
					>
						{
							'© 2022 iDinheiro. Gana Internet S.A faz parte do grupo CASH3 sob o CNPJ 37.675.515/0001-00. Todos os direitos reservados.'
						}
					</Text>

					{(pathname === '/' || pathname === '/quem-somos') && (
						<Text
							css={{
								fontSize: '$sm',
								paddingY: '0.5rem',
								fontWeight: 'bold',
								textTransform: 'uppercase',
							}}
						>
							Grupo cash3:
							{groupCash &&
								groupCash[0].map((item, indexItem) => (
									<Link key={indexItem} href={item.node.url}>
										{indexItem !== 0 && ' - '}

										<Text
											as={'span'}
											css={{
												fontWeight: 400,
												textTransform: 'initial',
												textDecoration: 'underline',
											}}
										>
											{` ${item.node.label}`}
										</Text>
									</Link>
								))}
						</Text>
					)}
				</Container>
			</Box>
		</Box>
	);
}
