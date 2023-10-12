import {HStack, Image, Spacer} from "@chakra-ui/react";
import BurgerMenu from "./burger";
import SearchBar from "./searchbar";
import Userpage from "../user/userpage";
import Login from "../user/login";

const NavBar = () => {
  

  return (
  <>
    <HStack justifyContent="space-between" px={1} py={1}>
      <BurgerMenu />
      {/* make this shit match with a grid maybe?*/}
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