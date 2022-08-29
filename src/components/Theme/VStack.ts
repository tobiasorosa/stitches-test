import { styled } from '~/src/styles/stitches.config';

export const VStack = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	variants: {
		variant: {
			'accordion-items': {
				flex: 1,
				height: '100%',
				maxWidth: '280px',
				paddingLeft: '0.5rem',
			},
		},
	},
});
