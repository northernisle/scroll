import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ChakraColorModeProvider } from 'components';

import 'styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraColorModeProvider cookies={pageProps.cookies}>
      <Head>
        <title>Scroll</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <Component {...pageProps} />
    </ChakraColorModeProvider>
  );
};

export { getServerSideProps } from 'components/ChakraColorModeProvider';

export default App;
