import { HStack, Image, Spacer, Text} from "@chakra-ui/react";
import logoMan from "../../assets/logo.png";
import logoName from "../../assets/logoName.png";
import BurgerMenu from "./burger";
import SearchBar from "./searchbar";

const NavBar = () => {
  return (
  <>
    <HStack justifyContent="space-between" px={1} py={1}>
      <BurgerMenu />
      {/* make this shit match with a grid maybe?*/}
      <Image src={logoName} w="10%" h="10%" px={1} py={1} />
      <Spacer />
      <Image src={logoMan} boxSize="5%" px={5} py={5} />
      <SearchBar />
    </HStack>
  </>
  );
};
  export default NavBar;