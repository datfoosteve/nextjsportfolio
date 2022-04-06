import NextLink from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

const Link = ({ children, href, currentPath, ...props }) => (
  <NextLink href={href} passhref>
    <ChakraLink
      bg={href === currentPath && useColorModeValue("gray.100", "gray.700")}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      {...props}
    >
      {children}
    </ChakraLink>
  </NextLink>
);

export default Link;
