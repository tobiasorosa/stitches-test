import Image from 'next/image';
import React from 'react';

import { ModelIdhBestSummaryBlock as Model } from '~src/models/gutenberg/ModelIdhBestSummaryBlock';
import { OutboundLinkComponent } from '../Custom/OutboundLinkComponent';
import { Box, Heading, HStack, Link, Stack } from '../Theme';
import StarIcon from '~public/img/icons/star.svg';

export interface IdhBestSummaryBlockProps {
	data: Model;
}

export function IdhBestSummaryBlock(props: IdhBestSummaryBlockProps) {
	const { data } = props;

	return (
		<Box>
			<Box
				css={{
					marginBottom: '1.5rem',
				}}
			>
				<Heading as={'h2'} size={'md'}>
					<StarIcon
						style={{
							marginRight: '0.5rem',
						}}
					/>

					{data.title}
				</Heading>
			</Box>

			<Stack
				css={{
					marginLeft: '1rem',
					paddingBottom: '1rem',

					'@sm': {
						marginLeft: '2rem',
					},
				}}
			>
				{data.headers.map(it => (
					<HStack key={it.id}>
						<Link
							target='_blank'
							href={it.link}
							css={{
								fontWeight: 'bold',
							}}
						>
							{it.title}
						</Link>

						{it?.linkParceria && (
							<OutboundLinkComponent
								postID={data.postId}
								productId={it.id}
								productType={'credit-card'}
								/* ESSE BLOCO DE SUMARIO ESTA HARDCODED PRA CARTOES APENAS. 
                PRECISA SER REFATORADO PARA ACEITAR QUALQUER PRODUTO E 
                MUDAR ESSA LINHA PARA UMA VARIAVEL DINAMICA */
								productName={it.title}
								linkLocationName={'bloco_sumario'}
								outboundLink={it.outboundLink}
								variant={'underline'}
							>
								<Image
									src={'/img/solicitar.png'}
									alt={'Solicitar'}
									width={'60px'}
									height={'20px'}
									objectFit={'contain'}
								/>
							</OutboundLinkComponent>
						)}
					</HStack>
				))}
			</Stack>
		</Box>
	);
}
