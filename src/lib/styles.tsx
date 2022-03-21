import React from 'react';
import { createStitches } from '@stitches/react';
import '@fontsource/open-sans';
import '@fontsource/source-code-pro';

export const { styled, globalCss } = createStitches({
  theme: {
    fonts: {
      base: 'Open Sans',
      code: 'Source Code Pro',
    },
    fontSizes: {
      sm: '11px'
    }
  },
  media: {
    desktop: '(min-width: 510px)',
    bp1: '(min-width: 30em)',
    bp2: '(min-width: 48em)',
    bp3: '(min-width: 62em)',
    bp4: '(min-width: 80em)',
    bp5: '(min-width: 96em)',
  },
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
});
