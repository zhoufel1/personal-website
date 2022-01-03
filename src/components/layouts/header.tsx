import React from 'react';
import { styled } from 'src/lib/styles';
import Button from '../button';
import ATag from '../a-tag';
import Separator from '../separator';
import Link from 'next/link';

const _Container = styled('div', {
  paddingBottom: 25,
});

const _Stack1 = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const _Stack = styled('div', {
  display: 'flex',
  gap: 25,
});

const Header = () => {
  return (
    <_Container>
      <_Stack1>
        <h1>BANNER</h1>
        <Button>TEST</Button>
      </_Stack1>
      <Separator />
      <_Stack>
        <Link href="/test">
          <ATag>ABOUT</ATag>
        </Link>
        <Link href="/test">
          <ATag>BLOG</ATag>
        </Link>
        <Link href="/test">
          <ATag>PROJECTS</ATag>
        </Link>
        <Link href="/test">
          <ATag>RESUME</ATag>
        </Link>
      </_Stack>
    </_Container>
  );
};

export default Header;
