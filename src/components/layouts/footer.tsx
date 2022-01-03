import React from 'react';
import { styled } from 'src/lib/styles';
import Separator from 'src/components/separator';
import ATag from '../a-tag';
import Link from 'next/link';

const _Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 25,
  paddingTop: 75,
  gap: 10,
});
const _Row = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  fontFamily: '$code',
  gap: 10,
  alignItems: 'center',
});

const _Text = styled('p', {
  fontSize: 13,
  margin: 2,
  variants: {
    fontWeight: {
      bold: {
        fontWeight: 'bolder',
      },
    },
  },
});

const Footer = () => {
  return (
    <_Container>
      <_Row>
        <_Text>{'\u00A9 '} 2022 Felix Z</_Text>
        <Separator orientation="vertical" />
        <_Text fontWeight="bold">ce15aff</_Text>
        <Separator orientation="vertical" />
        <Link href="/">
          <ATag padding="none" fontSize="sm">
            Site Map
          </ATag>
        </Link>
      </_Row>
      <_Row>
        <Link href="/">
          <ATag padding="none" fontSize="sm">
            Icon 1
          </ATag>
        </Link>
        <Separator orientation="vertical" />
        <Link href="/">
          <ATag padding="none" fontSize="sm">
            Icon 2
          </ATag>
        </Link>
        <Separator orientation="vertical" />
        <Link href="/">
          <ATag padding="none" fontSize="sm">
            Icon 3
          </ATag>
        </Link>
        <Separator orientation="vertical" />
        <Link href="/">
          <ATag padding="none" fontSize="sm">
            Icon 4
          </ATag>
        </Link>
      </_Row>
    </_Container>
  );
};

export default Footer;
