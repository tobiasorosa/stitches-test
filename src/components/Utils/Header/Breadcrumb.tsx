import Image from 'next/image';
import { Maybe, SeoPostTypeBreadcrumbs } from '~/src/types/wp-graphql';
import { ChevronRight } from '~public/img/icons';
import { Link, Text } from '../../Theme';

interface BreadcrumbProps {
	items: Maybe<SeoPostTypeBreadcrumbs>[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<>
			{items?.map(it => {
				it?.url && it.text && (
					<>
						<Link href={it?.url}>{it?.text}</Link>
						<Image src={ChevronRight} alt={'right arrow icon'} />
					</>
				);
			})}
		</>
	);
};

export default Breadcrumb;
