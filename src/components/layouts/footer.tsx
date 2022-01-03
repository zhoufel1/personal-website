import React from 'react';
import { styled } from 'src/lib/styles';

const _Footer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
});

const Footer = () => {
  return (
    <_Footer>
      <p>{'\u00A9 '} 2022</p>
    </_Footer>
  );
};

export default Footer;
