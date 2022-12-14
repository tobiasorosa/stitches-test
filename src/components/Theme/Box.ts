import { styled } from '~src/styles/stitches.config';

export const Box = styled('div', {
	variants: {
		variant: {
			'right-addon': {
				display: 'flex',
				right: 0,
				width: '2rem',
				height: '2rem',
				fontSize: '0.875rem',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute',
				top: 0,
				zIndex: 2,
			},

			'input-group': {
				width: '20rem',
				display: 'flex',
				position: 'relative',
				maxWidth: '100%',
			},

			separator: {
				flex: 1,
				justifySelf: 'stretch',
				alignSelf: 'stretch',
			},

			'svg-addon': {
				fontSize: '$md',
				background: '#CCE0FE',
				border: '2px solid transparent',
				borderRadius: '0.375rem',
				height: '2.5rem',
				paddingInline: '1rem',
				width: 'auto',
				display: 'flex',
				alignItems: 'center',
				whiteSpace: 'nowrap',
			},

			'mobile-menu': {
				paddingInline: '1.5rem',
				paddingY: '0.5rem',
				flex: '1 1 0%',
				overflow: 'auto',
				scrollbarWidth: 0,

				'&::-webkit-scrollbar': {
					display: 'none',
				},
			},
		},
	},
});
