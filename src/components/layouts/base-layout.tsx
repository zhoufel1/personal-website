import React from 'react';
import { styled } from 'src/lib/styles';

const _StyledLayout = styled('div', {
  fontFamily: '$base',
  display: 'flex',
  flexDirection: 'column',
  '@bp1': { paddingLeft: '20px', paddingRight: '20px' },
  '@bp2': { paddingLeft: '50px', paddingRight: '50px' },
  '@bp3': { paddingLeft: '150px', paddingRight: '150px' },
  '@bp4': { paddingLeft: '250px', paddingRight: '250px' },
});

type BaseLayoutProps = {
  children?: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <_StyledLayout>{children}</_StyledLayout>;
};

export default BaseLayout;
