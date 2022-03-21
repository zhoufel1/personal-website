import React from 'react';
import { styled } from 'src/lib/styles';
import Container from 'src/components/primitives/container';
import Separator from 'src/components/separator';

const _Container = styled(Container, {
  justifyContent: 'center',
  alignItems: 'center',
  height: '35vh'
});

const _Stack = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  width: 175
});

const Custom404Page = () => {
  return (
    <>
      <_Container>
        <_Stack>
          <h1>404</h1>
          <h5>Page Not Found</h5>
        </_Stack>
      </_Container>
    </>
  );
};

export default Custom404Page;
