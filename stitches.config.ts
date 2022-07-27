import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      default: 'Overpass',
    },
    colors: {
      primary: '#4065ff',
      white: 'white',
      slate: '#373737'
    },
    fontSizes: {
      1: '14px',
      2: '16px',
      3: '18px',
    },
  },
});