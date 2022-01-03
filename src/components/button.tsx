import React from 'react';
import { styled } from 'src/lib/styles';

const Button = styled('button', {
  height: 40,
  minWidth: 100,
  paddingLeft: 25,
  paddingRight: 25,
  cursor: 'pointer',
  backgroundColor: 'White',
  color: 'Black',
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: 'medium',
  '&:hover': {
    backgroundColor: 'Black',
    color: 'White',
  },
  '&:active': {
    backgroundColor: 'White',
  },
});

export default Button;
