import { Box, Container, Heading, Divider, SlideFade } from "@chakra-ui/react";
import Paragraph from "components/Paragraph";
import Head from "next/head";
import BookCard from "components/BookCard";
import Message from "components/Message";

const Books = ({ books }) => {
  return (
    <div>
      <Head>
        <title>Books | Stephen Puthenpurackal</title>
        <meta
          name="description"
          content="A list of my favorite development books"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stephenputhenpurackal.dev/" />
        <meta
          property="og:title"
          content="A list of my favorite development books."
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <Container maxW="container.lg" mt={10}>
        <SlideFade in={true} offsetY={80}>
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={4}
            >
              Books
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              A list of my favorite development books.
            </Paragraph>
          </Box>
          <Divider my={10} />
        </SlideFade>
        <SlideFade in={true} offsetY={80} delay={0.2}>
          {books?.length === 0 ? (
            <Message />
          ) : (
            <Box
              w="100%"
              mt={10}
              mx="auto"
              sx={{ columnCount: [1, 2, 3], columnGap: "20px" }}
            >
              {books?.map((item) => (
                <BookCard book={item.fields} key={item.fields.name} />
              ))}
            </Box>
          )}
        </SlideFade>
        <Message
          message="This just a small list of the book I like, but there's plenty of good books out there!"
          type="info"
        />
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  let sortQuery = "sort[0][field]=order&sort[0][direction]=asc";

  let res = await fetch(
    `${process.env.API_ENPOINT}${process.env.WEBSITE_BASE}/books?${sortQuery}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRETABLE_AUTH}`,
      },
    }
  );

  let data = await res.json();

  if (data.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      books: data?.records,
    },
    revalidate: 5,
  };
}

export default Books;