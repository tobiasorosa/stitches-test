import { styled } from '~/src/styles/stitches.config';

export const Text = styled('p', {
	fontFamily: 'Overpass',

	variants: {
		size: {
			1: {
				fontSize: '$1',
			},
			2: {
				fontSize: '$2',
			},
			3: {
				fontSize: '$3',
			},
		},

		variant: {
			subtitle: {
				color: '#4A5568',
				fontSize: '1rem',
				fontWeight: 700,

				marginTop: '2rem',
			},

			'menu-option-item-label': {
				marginTop: '1rem',
				marginBottom: 0,
				fontWeight: 'bold',
				textTransform: 'uppercase',
				color: '#0071ff',
				fontSize: '0.875rem',

				'@lg': {
					marginTop: 0,
					marginBottom: '1rem',
				},
			},

			'before-ad': {
				textAlign: 'center',
				textTransform: 'uppercase',
				fontSize: '$xs',
				marginBottom: '0.5rem',
			},
		},
	},
});
