import Image from 'next/image';
import { Maybe, SeoPostTypeBreadcrumbs } from '~/src/types/wp-graphql';
import ChevronRight from '~public/img/icons/chevron-right.svg';
import { Box, HStack, Link, ListItem, Stack, Text } from '../../Theme';

interface BreadcrumbProps {
	items: Maybe<SeoPostTypeBreadcrumbs>[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	console.log(items);
	return (
		<nav>
			<ol>
				{items?.map((it, index) => {
					return (
						it?.url &&
						it.text && (
							<ListItem key={it.url}>
								<Link
									href={it?.url}
									css={{
										textTransform: 'uppercase',
										fontSize: '0.875rem',
									}}
								>
									{it?.text}
								</Link>
								{index < items.length - 1 && (
									<Box
										as='span'
										css={{
											marginX: '0.5rem',
										}}
									>
										<ChevronRight width={16} />
									</Box>
								)}
							</ListItem>
						)
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
