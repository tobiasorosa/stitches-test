import { styled } from '~src/styles/stitches.config';

export const Box = styled('div', {
	variants: {
		for: {
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
		},
	},
});
