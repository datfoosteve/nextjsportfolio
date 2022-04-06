import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const Link = ({ children, href, currentPath, ...props }) => (
  <NextLink href={href} passHref>
    <ChakraLink
      bg={href === currentPath && (useColorModeValue("gray.100", "gray.700"))}
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
