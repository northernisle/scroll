import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='logo.svg' />
        <link rel='canonical' href='https://scroll.sh/' />
        <meta name='robots' content='index, follow' />
        <meta
          name='description'
          content='An extension to read your favorite articles without ads and paywalls. Available on Firefox, Chrome, Safari and Edge.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
