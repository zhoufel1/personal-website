import React from 'react';
import { styled } from 'src/lib/styles';

const ATag = styled('a', {
  marginTop: 16,
  marginBottom: 16,
  cursor: 'pointer',
  '&:hover': {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  '&:active': {
    color: 'White',
  },
  variants: {
    fontSize: {
      sm: {
        fontSize: 13,
      },
    },
    padding: {
      none: {
        margin: 0,
        padding: 0
      }
    }
  },
});

export default ATag;
