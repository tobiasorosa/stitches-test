import Image from 'next/image';
import { useMemo } from 'react';
import { Calculadora, Noticia, Post, Tabela } from '~/src/types/wp-graphql';
import { AspectRatio } from '../Layouts/AspectRatio';
import { Heading, Link, Stack } from '../Theme';

interface PostCardProps {
	post: Noticia | Post | Calculadora | Tabela;
}

export const PostCardSimulate = (props: PostCardProps) => {
	const { post, ...rest } = props;

	const src = useMemo(
		() => post?.featuredImage?.node?.sourceUrl ?? undefined,
		[post?.featuredImage?.node?.sourceUrl]
	);

	const alt = useMemo(
		() =>
			post?.featuredImage?.node?.altText ||
			`Imagem ilustrativa da ${post?.title}`,
		[post]
	);

	return (
		<>
			{post?.link && (
				<Stack {...rest} css={{ width: '300px', flexDirection: 'column' }}>
					<AspectRatio
						as='figure'
						ratio={7 / 4}
						css={{
							borderTopRightRadius: '0.5rem',
							borderTopLeftRadius: '0.5rem',
							overflow: 'hidden',
						}}
					>
						<>
							{src && alt && (
								<Link href={post.link}>
									<Image
										src={src}
										alt={alt}
										width={300}
										height={200}
										objectFit={'cover'}
									/>
								</Link>
							)}
						</>
					</AspectRatio>

					<Stack
						css={{
							padding: '1rem',
							flexDirection: 'column',
						}}
					>
						<Heading as={'h3'} variant={'subtitle'}>
							<Link href={post.link}>{post.title}</Link>
						</Heading>

						<Link
							href={post.link}
							css={{
								color: '#3182ce',
								width: 'fit-content',
								textTransform: 'uppercase',
								marginTop: '1rem',
							}}
						>
							{'Simular ->'}
						</Link>
					</Stack>
				</Stack>
			)}
		</>
	);
};
