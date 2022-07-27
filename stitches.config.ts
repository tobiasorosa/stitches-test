import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      default: 'Overpass',
    },
    colors: {
      primary: 'hsl(206,10%,5%)',
      white: 'white',
    },
    fontSizes: {
      1: '14px',
      2: '16px',
      3: '18px',
    },
  },
});