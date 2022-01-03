import React from 'react';
import { styled } from 'src/lib/styles';

const _Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
});

const Custom404Page = () => {
  return (
    <>
      <_Container>
        <h3>You made a Fucko Wucko</h3>
        <h1>O W O</h1>
      </_Container>
    </>
  );
};

export default Custom404Page;
