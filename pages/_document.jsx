import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {/* <link rel="icon" type="image/svg+xml" href="/logo.svg" /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
