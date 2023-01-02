import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from '@styles/global';
import Contexts from '@components/templates/Contexts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Contexts>
      <Head>
        <title>University Library</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Contexts>
  );
}
