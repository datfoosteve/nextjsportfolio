import {
    Menu,
    MenuButton,
    useColorModeValue,
    MenuList,
    Button,
    MenuItem,
  } from "@chakra-ui/react";
  import { FaAngleDown } from "react-icons/fa";
  import Link from "./Link";

  
  
  const DropdownMenu = ({ currentPath, extraLinks }) => {
    const refacColorMode = useColorModeValue("gray.200", "gray.700");
    return (

        

      <Menu autoSelect={false}>
        <MenuButton
          p={2}
          textAlign="left"
          rounded={"md"}
          bg="none"
          _hover={{
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          _active={{
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          fontWeight={400}
          as={Button}
          rightIcon={<FaAngleDown />}
        >
          Links
        </MenuButton>
      <MenuList bg={useColorModeValue("gray.50", "gray.800")}>
        {extraLinks &&
          extraLinks?.map(({ name, route }) => (
            <Link href={route} key={name}>
              <MenuItem
                bg={currentPath === route && refacColorMode}>
                {name}
              </MenuItem>
            </Link>
          ))}
      </MenuList>
      </Menu>
    );
  };

 
  export default DropdownMenu;
  