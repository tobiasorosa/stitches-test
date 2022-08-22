import { styled } from '~src/styles/stitches.config';

export const Button = styled('button', {
	width: 'auto',
	display: 'inline-flex',
	appearance: 'none',
	alignItems: 'center',
	justifyContent: 'center',
	userSelect: 'none',
	whiteSpace: 'none',
	verticalAlign: 'middle',
	cursor: 'pointer',

	variants: {
		color: {
			transparent: {
				outline: '2px solid transparent',
				outlineOffset: '2px',
				fontWeight: 600,
				transitionProperty:
					'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
				transitionDuration: '200ms',
				background: '#EDF2F7',

				'&:hover': {
					background: '#E2E8F0',
				},

				'&:active': {
					background: '#CBD5E0',
				},

				'&:focus': {
					boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6);',
				},
			},
		},
		size: {
			sm: {
				height: '1.5rem',
				minWidth: '2rem',
				fontSize: '0.875rem',
				lineHeight: 1.2,
			},
		},
		border: {
			rounded: {
				borderRadius: '9999px',
			},
		},
		variant: {
			menu: {
				borderRadius: 0,
				textTransform: 'uppercase',
				fontWeight: 600,
				fontSize: '0.75rem',
				display: 'inline-flex',
				appearance: 'none',
				alignItems: 'center',
				justifyContent: 'center',
				userSelect: 'none',
				position: 'relative',
				whiteSpace: 'nowrap',
				verticalAlign: 'baseline',
				outline: '2px solid transparent',
				outlineOffset: '2px',
				width: 'auto',
				lineHeight: 'normal',
				height: 'auto',
				minWidth: '2.5rem',
				paddingInline: '1rem',
				padding: 0,
				paddingBottom: '0.5rem',
			},

			'calculator-reset': {
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				userSelect: 'none',
				outline: '2px solid transparent',
				outlineOffset: '2px',
				borderRadius: '9999px',
				fontWeight: 600,
				transitionProperty:
					'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
				transitionDuration: '200ms',
				fontSize: '$lg',
				height: '3rem',
				minWidth: '3rem',
				paddingInline: '1.5rem',
			},
		},
	},
});
