import { styled } from '~/src/styles/stitches.config';

export const Stack = styled('div', {
	display: 'flex',

	variants: {
		variant: {
			navbar: {
				width: '100%',
				marginInlineStart: 'auto',
				marginInlineEnd: 'auto',
				flexDirection: 'column',
				alignItems: 'stretch',
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

			'calculator-form': {
				padding: '0.75rem',
				paddingInline: '1rem',
				marginTop: '2rem',
				border: '1px solid #E2E8F0',
				borderRadius: 8,
				display: 'flex',
				flexDirection: 'column',

				'@sm': {
					padding: '1.75rem',
				},
			},
		},
	},
});
