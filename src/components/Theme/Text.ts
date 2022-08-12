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
	},
});
