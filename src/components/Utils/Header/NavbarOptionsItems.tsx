import { MenuItem } from '~/src/utils/processMegaMenu';
import { Link, Stack, Text } from '../../Theme';

interface NavbarOptionsItemsProps {
	'data-items': MenuItem[] | undefined;
	categoryUrl?: string;
}

const NavbarOptionsItems: React.FC<NavbarOptionsItemsProps> = props => {
	const { categoryUrl } = props;

	return (
		<Stack variant='menu-option-item-group'>
			{props['data-items']?.map(it => (
				<Stack key={it.id} variant='menu-option-item'>
					<Text variant='menu-option-item-label'>{it.label}</Text>

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
								size={1}
								css={{
									marginTop: '0.5rem',
								}}
							>
								{childItem.label}
							</Link>
						);
					})}
				</Stack>
			))}
		</Stack>
	);
};

export default NavbarOptionsItems;
