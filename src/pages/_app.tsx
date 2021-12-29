import React from 'react';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import BaseLayout from 'src/components/layouts/base-layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
};

export default App;
