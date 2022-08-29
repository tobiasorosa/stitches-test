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
	lineHeight: 1.2,
	transitionProperty:
		'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
	transitionDuration: '200ms',

	'&[disabled]': {
		cursor: 'not-allowed',
		opacity: 0.4,
	},

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

			blue: {
				outline: '2px solid transparent',
				outlineOffset: '2px',
				fontWeight: 600,
				background: '#0066FF',
				color: 'white',

				'&:hover': {
					background: '#0051CC',
				},

				'&:active': {
					background: '#003D99',
				},

				'&:focus': {
					boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6);',
				},

				'&:hover[disabled]': {
					background: '#0066FF',
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

			'calculator-result': {
				fontSize: '$lg',
				height: '3rem',
				minWidth: '3rem',
				paddingInline: '1.5rem',
			},

			'menu-close': {
				fontSize: '12px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexShrink: 0,
				borderRadius: '0.375rem',
				width: '2rem',
				height: '2rem',
				position: 'absolute',
				top: '0.5rem',
				right: '0.75rem',
			},

			'mobile-navbar': {
				verticalAlign: 'middle',
				borderRadius: '9999px',
				height: '2.5rem',
				minWidth: '2.5rem',
				width: 'auto',
			},
		},
	},
});
