import Head from "next/head";
import GlobalStyle from "../src/theme/globalStyleComponent";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* importando script do google analytics */}
        {/* <script async src='https://www,googletagmanager.com/gatg/qweqweqwe'></script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = ....
              ... restante do código
            `
          }}
        /> */}
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
