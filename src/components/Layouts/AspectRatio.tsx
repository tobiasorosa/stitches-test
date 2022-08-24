import { CSS } from '@stitches/react/types/css-util';
import { Children } from 'react';
import { mapResponsive } from '~/src/utils/style/mapResponsive';
import { Box } from '../Theme';

export type ResponsiveArray<T> = Array<T | null>;

export type ResponsiveObject<T> = Partial<Record<string, T>>;

export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>;

/**
 * The aspect ratio of the Box. Common values are:
 *
 * `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
 */
export interface AspectRatioProps {
	ratio?: ResponsiveValue<number>;
	children?: React.ReactNode;
	as?: string;
	css?: CSS;
}

export const AspectRatio: React.FC<AspectRatioProps> = props => {
	const { ratio = 4 / 3, children, css, ...rest } = props;

	const child = Children.only(children);
	return (
		<Box
			css={{
				position: 'relative',

				'&::before': {
					height: 0,
					content: `""`,
					display: 'block',
					paddingBottom: mapResponsive(ratio, r => `${(1 / r) * 100}%`),
				},

				'& > *:not(style)': {
					overflow: 'hidden',
					position: 'absolute',
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
				},

				'& > img, & > video': {
					objectFit: 'cover',
				},
				...css,
			}}
			{...rest}
		>
			{child}
		</Box>
	);
};
