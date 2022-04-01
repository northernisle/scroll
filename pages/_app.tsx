import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Scroll</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default React.memo(App);
