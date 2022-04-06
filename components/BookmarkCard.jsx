import {
    Box,
    Heading,
    LinkOverlay,
    LinkBox,
    Image,
    useColorModeValue,
    Tag,
  } from "@chakra-ui/react";
  import Paragraph from "./Paragraph";
  import { motion } from "framer-motion";
  
  const BookmarkCard = ({ bookmark }) => {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <LinkBox as="article">
          <Box
            w="100%"
            p={4}
            mb={5}
            d="inline-block"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius={5}
            borderWidth="1px"
            transition=".5s"
            cursor="pointer"
            role="group"
            _hover={{
              borderColor: "green.300",
            }}
          >
            <Box
              d="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="space-between"
            >
              <LinkOverlay href={bookmark?.url} isExternal>
                <Heading as="h6" size="md">
                  {bookmark?.title}
                </Heading>
                <Paragraph mt={1} fontSize="sm">
                  {bookmark?.description}
                </Paragraph>
              </LinkOverlay>
              <Tag mt={5} textTransform="uppercase">
                {bookmark?.tag}
              </Tag>
            </Box>
          </Box>
        </LinkBox>
      </motion.div>
    );
  };
  
  export default BookmarkCard;
  