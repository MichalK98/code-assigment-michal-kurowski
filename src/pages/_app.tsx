import type { AppProps } from 'next/app';
import GlobalStyle from 'src/GlobalStyle';

import DefaultLayout from '../layouts/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default MyApp
