import ToolCard from "../../ToolCard";
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import Paragraph from "../../Paragraph";

const tools = [
  {
    name: "Node.js",
    description: "Chrome's V8 JavaScript engine for server-side javascript.",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "Javascript",
    description: "These days you can't build an amazing product without JS.",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.info",
  },
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "SQL & MongoDb",
    description: "Both database are great, and they have their use cases.",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "GIT & Github",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://medium.com/swlh/things-about-git-and-github-you-need-to-know-as-developer-907baa0bed79",
  },
  {
    name: "Figma",
    description: "Figma is powerfull & easy to use software for UI/UX design.",
    icon: <FaFigma fontSize="20px" />,
    url: "https://www.figma.com/",
  },
];

const Stack = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Primary Stack & Technologies
      </Heading>
      <Paragraph fontSize="xl" lineHeight={1.6}>
        As a full-stack web developer there are alot of tools you use in your
        daily bases, these are primary tools that i use & like.
      </Paragraph>
      <Grid
        mt={10}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool?.name} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Stack;
