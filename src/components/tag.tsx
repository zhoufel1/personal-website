import React from 'react';
import { styled } from 'src/lib/styles';

type TagProps = {
  children?: React.ReactNode;
};

const _Outer = styled('div', {
  display: 'flex',
  width: 'fit-content',
  background: 'Black',
  color: 'White',
  borderRadius: 5,
});

const _Label = styled('p', {
  fontSize: '$sm',
  margin: 3,
  padding: 3,
});

const Tag = ({ children }: TagProps) => {
  return (
    <_Outer>
      <_Label>{children}</_Label>
    </_Outer>
  );
};

export default Tag;
