import {
    Box,
    Heading,
    SlideFade,
    ScaleFade,
    Link,
    LightMode,
    Button,
    ButtonGroup,
  } from "@chakra-ui/react";
  
  import { FaEnvelope, FaSnapchat, FaGithub, FaLinkedin, FaFigma, FaCodepen, FaPaintBrush} from "react-icons/fa";
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
            Welcome to <strong>the abode</strong>
          </Heading>

          <ScaleFade in={true} offsetY={80}>
          <Paragraph
            as="h1"
            fontSize={{ base: "14px", md: "25px", lg: "30px" }}
            mb={3}
          >
            My Name Is Stephen, Pleased To make Your Aquaintance
          </Paragraph>
          </ScaleFade>
          
          <Paragraph fontSize="xl" lineHeight={1.6}>
            I am a Full stack developer - UI / UX Designer, focused on the Learning Everything. Mastered C++, Python,{" "}
            <Link
              color="blue.500"
              href="https://www.nodejs.org"
              isExternal
              fontWeight="500"
            >
              Nodejs,
            </Link>{" "}
            <Link
              color="blue.500"
              href="https://www.reactjs.org"
              fontWeight="500"
              isExternal
            >
              React
            </Link>
           . Experianced in most UI or Frameworks. Looking for Employment
          </Paragraph>
          <Box mt={10}>
            <LightMode>
              <ButtonGroup>
                <Button
                  colorScheme="blue"
                  bg="blue.500"
                  href="mailto:datfoosteve@gmail.com"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaEnvelope />}
                >
                  My Email
                </Button>
                <Button
                  colorScheme="black"
                  bg="black"
                  href="github.com/datfoosteve"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaGithub />}
                >
                  Github
                </Button>
                <Button
                  colorScheme="purple"
                  bg="black"
                  href="https://www.figma.com/@datfoosteve"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaFigma />}
                >
                  Figma
                </Button>
                <Button
                  colorScheme="telegram"
                  bg="telegram.300"
                  href="https://codesandbox.io/u/datfoosteve"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaPaintBrush />}
                >
                  CodeSandbox
                </Button>
                <Button
                  colorScheme="teal"
                  bg="blackAlpha.100"
                  href="https://codepen.io/datfoosteve"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaPaintBrush />}
                >
                  CodePen
                </Button>
                <Button
                  colorScheme="yellow"
                  bg="yellow.500"
                  href="snapchat.com/datfoosteve"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaSnapchat />}
                >
                  Snapchat
                </Button>
                <Button
                  colorScheme="blue"
                  bg="blue"
                  href="linkedin.com/datfoosteve"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaLinkedin />}
                >
                  Linkedin
                </Button>
              </ButtonGroup>
            </LightMode>
          </Box>
        </Box>
      </SlideFade>
    );
  };
  
  export default Profile;
  