import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { styled } from 'src/lib/styles';

const Separator = styled(SeparatorPrimitive.Root, {
  height: 1,
  backgroundColor: 'Black',
  '&[data-orientation="vertical"]': {
    width: 10
  }
});

export default Separator;
