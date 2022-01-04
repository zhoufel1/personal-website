import React from 'react';
import { styled } from 'src/lib/styles';

const _Title = styled('h2', {
  paddingBottom: 0,
  marginBottom: 0,
});

const _SubTitle = styled('h4', {
  fontFamily: '$code',
  margin: 0,
  padding: 0,
});

const _Tag = styled('div', {
  margin: 0,
  padding: 0,
  height: 25,
  width: 50,
  background: 'Black',
  color: 'White',
});

const BlogPage = () => {
  return (
    <>
      <_Title>TITLE</_Title>
      <_SubTitle>January 01 2022</_SubTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <_Title>TITLE</_Title>
      <_SubTitle>January 01 2022</_SubTitle>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
    </>
  );
};

export default BlogPage;
