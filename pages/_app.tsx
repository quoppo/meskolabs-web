import type { AppProps } from "next/app";
import "../app/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
