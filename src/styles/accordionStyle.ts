export const accordionStyle = {
	'.accordion': {
		marginTop: '1.5rem',
	},

	'.accordion__item': {
		borderTopWidth: '1px',
		overflowAnchor: 'none',
		marginInline: '-1.5rem',

		'&:last-of-type': {
			borderBottomWidth: '1px',
		},
	},
	'.accordion__button': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		fontSize: '1rem',
		paddingInline: '1rem',
		paddingY: '0.5rem',

		'& svg': {
			display: 'inline-block',
			lineHeight: '1em',
			flexShrink: 0,
			opacity: 1,
			transition: 'transform 0.2s ease 0s',
			transformOrigin: 'center center',
			fontSize: '1.25em',
			verticalAlign: 'middle',
		},

		'&[aria-expanded="true"]': {
			'& svg': {
				transform: 'rotate(-180deg)',
			},
		},

		'&:focus': {
			boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
		},
	},
	'.accordion__panel': {
		overflow: 'initial',
		opacity: 1,
		height: 'auto',
		paddingTop: '1rem',
		paddingBottom: '1.25rem',
		paddingInline: '1rem',
	},
};
