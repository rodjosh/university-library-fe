import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from '@styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>University Library</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
