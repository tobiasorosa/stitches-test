import { styled } from '~/src/styles/stitches.config';

export const Stack = styled('div', {
	display: 'flex',

	variants: {
		for: {
			navbar: {
				width: '100%',
				marginInlineStart: 'auto',
				marginInlineEnd: 'auto',
				paddingInlineStart: '1rem',
				paddingInlineEnd: '1rem',
				alignSelf: 'center',
				flexDirection: 'column',
			},

			'navbar-container': {
				alignItems: 'stretch',
				flexDirection: 'column',
			},

			'menu-option-item-group': {
				flexDirection: 'column',
				alignItems: 'flex-start',
				width: '100%',
				padding: '1rem 0',

				'@lg': {
					flexDirection: 'row',
				},
			},

			'menu-option-item': {
				flex: 1,
				'&:not(:first-of-type)': {
					'@lg': {
						borderLeft: '1px solid #D4D4D4',
						marginInlineStart: '2rem',
					},
				},
				flexDirection: 'column',
				height: '100%',
				maxWidth: '280px',
				paddingLeft: '0.5rem',
			},
		},
	},
});
