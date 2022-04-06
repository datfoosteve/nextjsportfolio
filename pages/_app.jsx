import "../styles/main.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "/components/Layout";
import theme from "/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
