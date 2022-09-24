import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
