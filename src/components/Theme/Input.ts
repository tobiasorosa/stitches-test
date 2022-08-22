import { styled } from '~src/styles/stitches.config';

export const Input = styled('input', {
	variants: {
		variant: {
			search: {
				outline: '2px solid transparent',
				outlineOffset: 2,
				minWidth: 0,
				width: '100%',
				backgroundColor: '#EDF2F7',
				borderColor: 'transparent',
				borderRadius: '0.125rem',
				border: '2px solid transparent',
				height: '2rem',
				paddingInlineEnd: '2rem',
				paddingInlineStart: '0.75rem',
				fontSize: '0.875rem',
				transitionDuration: '200ms',
				color: 'inherit',

				'&:hover': {
					background: '#e5efff',
				},

				'&:focus': {
					background: 'transparent',
					borderColor: '#0066ff',
				},
			},

			'calculator-form': {
				width: '100%',
				minWidth: 0,
				outline: '2px solid transparent',
				outlineOffset: '2px',
				position: 'relative',
				appearance: 'none',
				fontSize: '$md',
				paddingInline: '1rem',
				height: '2.5rem',
				borderRadius: '0.375rem',
				background: '#E5EFFF',
			},
		},
	},
});
