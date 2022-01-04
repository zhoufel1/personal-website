import React from 'react';
import { styled } from 'src/lib/styles';
import Button from '../button';
import ATag from '../a-tag';
import Separator from '../separator';
import Link from 'next/link';

const _Wrapper = styled('div', {
  paddingBottom: 25,
});

const _Upper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const _Lower = styled('div', {
  display: 'flex',
  gap: 25,
});

const Header = () => {
  return (
    <_Wrapper>
      <_Upper>
        <h1>BANNER</h1>
        <Button>GITHUB</Button>
      </_Upper>
      <Separator />
      <_Lower>
        <Link href="/test">
          <ATag>ABOUT</ATag>
        </Link>
        <Link href="/blog">
          <ATag>BLOG</ATag>
        </Link>
        <Link href="/test">
          <ATag>PROJECTS</ATag>
        </Link>
        <Link href="/test">
          <ATag>RESUME</ATag>
        </Link>
      </_Lower>
    </_Wrapper>
  );
};

export default Header;
