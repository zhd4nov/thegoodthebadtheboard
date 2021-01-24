import 'tailwindcss/tailwind.css';

import App from 'next/app';
import type { AppProps } from 'next/app';
import { appWithTranslation } from '../../i18n';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
