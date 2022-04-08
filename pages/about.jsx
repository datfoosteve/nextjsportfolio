import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  SlideFade,
  Divider,
  Button,
  Collapse,
  LightMode,
  Tag,
} from "@chakra-ui/react";
import Paragraph from "/components/Paragraph";
import { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  const [coolStuff, setCoolStuff] = useState([
    "React",
    "Javascript",
    "Science",
    "Illustration",
    "AI",
    "Space",
    "Android",
    "Movies",
    "Comics",
    "Figma",
    "Tea",
  ]);
  const [notCoolStuff, setNotCoolStuff] = useState([
    "Angular",
    "Jquery",
    "Coffee",
    "Politics",
    "Narrow-minded",
    "Working Overtime",
  ]);

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <Head>
        <title>Stephen Puthenpurackal| About</title>
        <meta
          name="description"
          content="Stephen Puthenpurackal | Full stack developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="vercel.com/datfoosteve/stephensportfolio" />
        <meta
          property="og:title"
          content="Stephen Puthenpurackal | Full stack developer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                About Me
              </Heading>
              <Collapse in={show} startingHeight={100}>
                <Paragraph fontSize="xl" lineHeight={1.6}>
                An Inquisitive Computer Science student, skilled with strong foundations in
Mathamathics, Technological Acuity, Creativity, and inferential logic. Committed and
Challenge driven, my ambition in life is to apply my skillsets to benefit others,
whether it be people around me or the corportation that I work for. My Prior
occupations do not have any relation to who I am currently due to the change of
study and interests during the course of my college career, but shows exellence in the
ability to collaborate, communicate, and work with others efficiently.
                </Paragraph>
              </Collapse>
              <LightMode>
                <Button
                  size="sm"
                  onClick={handleToggle}
                  mt="1rem"
                  colorScheme="blue"
                  bg="blue.500"
                >
                  Show {show ? "Less" : "More"}
                </Button>
              </LightMode>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={3}
            >
              Cool Stuff
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {coolStuff.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="blue"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mt={10}
              mb={3}
            >
              Meh..
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {notCoolStuff.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="red"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
