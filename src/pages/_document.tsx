import { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlackStage",
  description: "Gestão de Eventos",
};

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="/logo.png" type="image/.png" sizes="<generated>" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
