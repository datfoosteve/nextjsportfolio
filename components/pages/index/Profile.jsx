import {
    Box,
    Heading,
    SlideFade,
    Link,
    LightMode,
    Button,
    ButtonGroup,
  } from "@chakra-ui/react";
  
  import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
  import Paragraph from "../../Paragraph";
  
  const Profile = () => {
    return (
      <SlideFade in={true} offsetY={80}>
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={3}
          >
            Yoooooooooooooooo, My name is Stephen, welcome to the humble abode
          </Heading>
          <Paragraph fontSize="2xl" lineHeight={1.6}>
            Full stack developer - UI / UX Designer, focused on Javascript, C++, CNC,{" "}
            <Link
              color="green.500"
              href="https://www.nodejs.org"
              isExternal
              fontWeight="500"
            >
              Nodejs,
            </Link>{" "}
            <Link
              color="green.500"
              href="https://www.reactjs.org"
              fontWeight="500"
              isExternal
            >
              React
            </Link>
            . I am looking to find employment as a fullstack developer. Teach me anything, I am always willing to learn something
          </Paragraph>
          <Box mt={10}>
            <LightMode>
              <ButtonGroup>
                <Button
                  colorScheme="green"
                  bg="green.500"
                  href="mailto:datfoosteve@gmail.com"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaEnvelope />}
                >
                  datfoosteve@gmail.com
                </Button>
                <Button
                  colorScheme="yellow"
                  bg="yellow.500"
                  href=" snapchat.com/datfoosteve"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaSnapchat />}
                >
                  Snapchat
                </Button>
              </ButtonGroup>
            </LightMode>
          </Box>
        </Box>
      </SlideFade>
    );
  };
  
  export default Profile;
  