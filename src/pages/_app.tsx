import React from 'react';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import BaseLayout from 'src/components/layouts/base-layout';
import { globalStyles } from 'src/lib/styles';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
};

export default App;
