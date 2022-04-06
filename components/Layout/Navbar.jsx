import {
    Box,
    Flex,
    HStack,
    IconButton,
    useColorMode,
    Button,
    useDisclosure,
    Stack,
    Container,
  } from "@chakra-ui/react";
  import Link from "./extra/Link";
  import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
  import DropdownMenu from "./extra/Menu";
  import Logo from "../Logo";
  import { useRouter } from "next/router";
  
  const Links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Me",
      route: "/about",
    },
    {
      name: "Bookmarks",
      route: "/bookmarks",
    },
  ];
  
  const extraLinks = [
    {
      name: "Books",
      route: "/books",
    },
    {
      name: "Blog",
      route: "/blog",
    },
  ];
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
  
    let router = useRouter();
    let { asPath } = router;
  
    const navigationItem = (
      <>
        {Links.map((link) => (
          <Link
            href={link.route}
            key={link.name}
            p={2}
            rounded={"md"}
            currentPath={asPath}
          >
            {link.name}
          </Link>
        ))}
        <DropdownMenu currentPath={asPath} extraLinks={extraLinks} />
      </>
    );
  
    return (
      <>
        <Box py={5} borderTop="2px" borderTopColor="green.500">
          <Container maxW="container.lg">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: !isOpen ? "none" : "inherit" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={8} alignItems={"center"}>
                <Box>
                  <Logo />
                </Box>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  {navigationItem}
                </HStack>
              </HStack>
              <Flex alignItems={"center"}>
                <Button aria-label="Switch Theme" onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Flex>
            {isOpen ? (
              <Box pb={4} mt={3}>
                <Stack as={"nav"} spacing={4}>
                  {navigationItem}
                </Stack>
              </Box>
            ) : null}
          </Container>
        </Box>
      </>
    );
  };
  
  export default Navbar;
  