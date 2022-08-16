import { styled } from '~src/styles/stitches.config';

export const Button = styled('button', {
	width: 'auto',
	paddingInlineStart: '0.75rem',
	paddingInlineEnd: '0.75rem',
	display: 'inline-flex',
	appearance: 'none',
	alignItems: 'center',
	justifyContent: 'center',
	userSelect: 'none',
	whiteSpace: 'none',
	verticalAlign: 'center',

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
	},
});
