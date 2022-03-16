import type { AppProps } from "next/app";
import GlobalsCSS from "../styles/Globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalsCSS />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
