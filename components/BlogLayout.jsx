import Head from "next/head";
import { Box, Container, Heading, SlideFade, Divider } from "@chakra-ui/react";

const BlogLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog Title | Stephen Puthenpurackal</title>
        <meta
          name="description"
          content="Stephen Puthenpurackal | Full stack developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="thehumbleabode.vercel.app" />
        <meta
          property="og:title"
          content="Stephen Puthenpurackal | Full stack Developer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <Container maxW="container.lg" mt={10}>
        <SlideFade in={true} offsetY={80}>
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: "28px", md: "32px", lg: "36px" }}
              mb={4}
            >
              Blog
            </Heading>
          </Box>
          <Divider my={10} />
        </SlideFade>
        <SlideFade in={true} offsetY={80}>
          <main>{children}</main>
        </SlideFade>
      </Container>
    </>
  );
};

export default BlogLayout;
