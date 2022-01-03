import React from 'react';
import { styled } from 'src/lib/styles';
import Footer from './footer';
import Header from './header';

const _Wrapper = styled('div', {
  fontFamily: '$base',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 20,
  height: '100vh',
});

const _MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
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
    <_Wrapper>
      <_MainContent>
        <Header />
        {children}
      </_MainContent>
      <_Spacer />
      <Footer />
    </_Wrapper>
  );
};

export default BaseLayout;
