import { styled } from '~/src/styles/stitches.config';

export const Table = styled('table', {
	fontVariantNumeric: 'lining-nums tabular-nums',
	borderCollapse: 'collapse',
	width: '100%',
	marginTop: '1rem',

	variants: {},
});

export const Thead = styled('thead', {
	background: '#E5EFFF',
});

export const Tbody = styled('tbody', {});

export const Tr = styled('tr', {});

export const Th = styled('th', {
	fontWeight: 700,
	textTransform: 'uppercase',
	textAlign: 'start',
	letterSpacing: '0.05rem',
	paddingInline: '1.5rem',
	paddingY: '0.75rem',
	lineHeight: '1rem',
	fontSize: '0.875rem',
	borderBottom: '1px solid',
	borderColor: '#CCE0FE',

	variants: {
		variant: {
			numeric: {
				textAlign: 'end',
			},
		},
	},
});

export const Td = styled('td', {
	textAlign: 'start',
	paddingInline: '1.5rem',
	paddingY: '1rem',
	lineHeight: '1.25rem',
	borderBottom: '1px solid',
	borderColor: '#CCE0FE',

	variants: {
		variant: {
			numeric: {
				textAlign: 'end',
			},
		},
	},
});
