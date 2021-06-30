import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import '../styles/globals.css';

export type NextApp = {
  ({ Component, pageProps }: AppProps): JSX.Element;
  getInitialProps(appContext: AppContext): Promise<{
    pageProps: any;
  }>;
};

const MyApp: NextApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// This disables the ability to perform automatic static optimization, causing every page in your app to be server-side rendered.
MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  console.log('hey');
  return { ...appProps };
};

export default MyApp;
