import React from 'react';
import { styled } from 'src/lib/styles';
import Container from '../primitives/container';
import Footer from './footer';
import Header from './header';

const _LayoutRoot = styled(Container, {
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 20,
  height: '100vh',
  fontFamily: '$base',
});

const _Content = styled(Container, {
  alignItems: 'normal',
  paddingTop: 50,
  width: 'min(92vw, 750px)', // Lil scuffed
  /*maxWidth: 750,*/
});

const _Spacer = styled('div', {
  flexGrow: 1,
});

type BaseLayoutProps = {
  children?: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <_LayoutRoot>
      <_Content>
        <Header />
        {children}
      </_Content>
      <_Spacer />
      <Footer />
    </_LayoutRoot>
  );
};

export default BaseLayout;
