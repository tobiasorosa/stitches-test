import { Children } from 'react';
import { Box, Grid, GridArticle, GridAside, Stack, VStack } from '../Theme';

type LayoutAreaProps = {
	children?: React.ReactElement | React.ReactElement[];
	slot?: string;
};

type HelperLayoutAreaProps = {
	children?: React.ReactNode;
};

export const LayoutArea = ({ children }: LayoutAreaProps) => {
	let _content, _sidebar;

	Children.forEach(children, child => {
		if (child && child.type === Content) {
			return (_content = child);
		}

		if (child && child.type === Sidebar) {
			return (_sidebar = child);
		}
	});

	return (
		<Grid
			css={{
				gridTemplateColumns: 'repeat(12, [col-start] 1fr)',
				gridColumnGap: '2rem',
				gridRowGap: '2rem',
			}}
			for='content-layout'
			// columnGap={{ base: 0, lg: 8 }}
		>
			<GridArticle
				css={{
					gridColumn: 'col-start / span 12',
					'@lg': {
						gridColumn: 'col-start / span 8',
					},
				}}
			>
				{_content}
			</GridArticle>

			<GridAside
				css={{
					gridColumn: 'col-start / span 12',
					'@lg': {
						gridColumn: 'col-start 9 / span 4',
					},
				}}
			>
				{_sidebar}
			</GridAside>
		</Grid>
	);
};

const Content = ({ children }: HelperLayoutAreaProps) => {
	return <>{children && <VStack>{children}</VStack>}</>;
};

const Sidebar = ({ children }: HelperLayoutAreaProps) => {
	return (
		<>
			{children && (
				<Box
					css={{
						position: 'sticky',
						top: 0,
					}}
				>
					{children}
				</Box>
			)}
		</>
	);
};

LayoutArea.Content = Content;
LayoutArea.Sidebar = Sidebar;
