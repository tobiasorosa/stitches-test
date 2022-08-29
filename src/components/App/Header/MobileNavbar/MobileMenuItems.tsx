import { Link, Text, VStack } from '~/src/components/Theme';
import { MenuItem } from '~/src/utils/processMegaMenu';

interface MobileMenuItemsProps {
	'data-items': MenuItem[] | undefined;
	categoryUrl?: string;
}

export const MobileMenuItems = (props: MobileMenuItemsProps) => {
	const { categoryUrl } = props;

	return (
		<VStack
			css={{
				alignItems: 'flex-start',
				width: '100%',
				padding: '1rem 0',
			}}
		>
			<Link
				css={{
					textDecoration: 'underline',
					marginBottom: '0.5rem',
					fontWeight: 'bold',
				}}
				href={categoryUrl}
			>
				{'Visão geral'}
			</Link>
			<VStack variant='accordion-items'>
				{props['data-items']?.map(it => (
					<VStack
						key={it.id}
						css={{
							marginTop: '0.5rem',
						}}
					>
						<Text
							css={{
								marginTop: '16px',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								color: '#0071FF',
								fontSize: '14px',
							}}
						>
							{it.label}
						</Text>

						{it.childItems?.map(childItem => {
							const childItemName = childItem.label
								.normalize('NFD')
								.replace(/[\u0300-\u036f]/g, '')
								.replace(/\s/g, '_')
								.toLowerCase();

							return (
								<Link
									key={childItem.id}
									id={`menu_item_${childItemName}`}
									href={childItem.url}
									css={{
										fontSize: '$sm',
										marginTop: '0.5rem',
									}}
								>
									{childItem.label}
								</Link>
							);
						})}
					</VStack>
				))}
			</VStack>
		</VStack>
	);
};
