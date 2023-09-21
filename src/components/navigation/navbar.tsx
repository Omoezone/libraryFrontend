import { Avatar, Button, HStack, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, useDisclosure} from "@chakra-ui/react";
import logoMan from "../../assets/logo.png";
import logoName from "../../assets/logoName.svg";
import BurgerMenu from "./burger";
import SearchBar from "./searchbar";

const NavBar = () => {
  return (
  <>
    <HStack justifyContent="space-between">
      <BurgerMenu />
      {/* make this shit match with a grid maybe?*/}
      <Image src={logoName} w="4rem" h="4rem" />
      <Spacer />
      <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                /** If we decide to go with userprofiles or such is there an very easy way to handle
                 * this on Avatar called "name". 
                 */
                  size={'sm'}
                  src={logoMan}
                />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/userPage">Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>

      <SearchBar />
    </HStack>
  </>
  );
};
  export default NavBar;