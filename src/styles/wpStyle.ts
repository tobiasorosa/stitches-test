export const wpStyle = {
	'.wp-content': {
		'& > h2': {
			fontSize: '$3xl',
			fontWeight: 'bold',
			lineHeight: 1,
			marginY: '2rem',
			color: '#2D3748',
		},
		'& > h3': {
			fontSize: '$2xl',
			fontWeight: 'bold',
			lineHeight: 1,
			marginY: '1.5rem',
			color: '#2D3748',
		},
		'& > h4': {
			fontSize: '$xl',
			fontWeight: 'bold',
			lineHeight: 1,
			marginY: '1rem',
			color: '#2D3748',
		},
		'& > p': {
			marginBottom: '1rem',
			color: '#171923',
		},
		'& > ul, > p ul, ol': {
			marginLeft: '1rem',
			marginBottom: '2rem',
			fontSize: '1rem',
			color: '#171923',
		},
		'& li': {
			marginBottom: '0.5rem',
			mt: '0.5rem',
		},
		'& > a, > p a': {
			transitionProperty: 'common',
			transitionDuration: 'fast',
			color: '#4065ff',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
		'& > a.wp-button, > p a.wp-button': {
			bg: '#0066ff',
			color: 'white',
			'&:hover': {
				textDecoration: 'none',
				bg: '#0051cc',
			},
			paddingX: '1rem',
			paddingY: '0.5rem',
			lineHeight: 8,
			rounded: 'full',
		},
		'& > figure > table': {
			borderCollapse: 'collapse',
			width: '100%',
			overflowX: 'auto',
			margin: '0 auto 1rem',
			WebkitOverflowScrolling: 'touch',
			'@media(max-width:767px)': {
				display: 'block',
			},
		},
		'& > figure > table td': {
			padding: '.75rem',
			borderTop: '1px solid #dee2e6',
		},
		'& > figure > table th': {
			textAlign: 'left',
			padding: '.75rem',
			borderTop: '1px solid #dee2e6',
		},
		'& > figure > table tbody': {
			backgroundColor: 'rgba(0,0,0,.01)',
		},
		'& > figure > table tr:nth-of-type(odd)': {
			backgroundColor: 'rgba(0,0,0,.01)',
		},
		'& > figure > table a': {
			color: '#4065ff',
		},
	},
	'.wp-comment': {
		'& h1': {
			fontSize: '$md',
			fontWeight: 'bold',
			lineHeight: 1,
			marginY: '1rem',
			color: '#2D3748',
		},
		'& h2': {
			fontSize: '$md',
			fontWeight: 'bold',
			lineHeight: 1,
			marginY: '1rem',
			color: '#2D3748',
		},
		'& h3': {
			fontSize: '$md',
			fontWeight: 'bold',
			lineHeight: 1,
			marginY: '1rem',
			color: '#2D3748',
		},
		'& h4': {
			fontSize: '$md',
			fontWeight: 'bold',
			lineHeight: 1,
			marginY: '1rem',
			color: '#2D3748',
		},
		'& p': {
			fontSize: '$sm',
			marginY: '0.5rem',
			color: '#171923',
		},
		'& a': {
			color: '#4065ff',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},
};
