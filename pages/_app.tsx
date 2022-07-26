import type { AppProps } from 'next/app';
import Head from "next/head";
import "normalize.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Car App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
