import { Heading, SlideFade, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
    <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Timeline
      </Heading>
      <Heading mt={10} mb={5} as="h2" size="md">
        2022
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Still Trying to find a job...Check my <Link href="www.github.com/datfoosteve">github out</Link>
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        2021
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Trying to find a job, Got into the SMU Full stack BootCamp
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Experimenting with all technologies
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        2020
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" /> Moved Back to Dallas, Continued Comp Science At UNT
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Attending Midwestern State University for Computer Science
        </ListItem>
      </List>
    </SlideFade>
  );
};

export default Timeline;