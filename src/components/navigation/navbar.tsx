import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import BurgerMenu from "./burger";
import SearchBar from "./searchbar";
import Userpage from "../user/userpage";
import Login from "../user/login";
import SignUp from "../user/signup";

const NavBar = () => {

  return (
  <>
    <HStack justifyContent="space-between" px={1} py={1}>
      <BurgerMenu />
      <Image src="assets/LogoName.svg" w="10%" h="10%" px={1} py={1} />
      <Spacer />
      <Login />
      <Userpage />
      <SearchBar />
    </HStack>
  </>

  );
};
export default NavBar;