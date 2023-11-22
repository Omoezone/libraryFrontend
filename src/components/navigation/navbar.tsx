import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import BurgerMenu from "./burger";
import SearchBar from "./searchbar";
import Usertab from "../user/usertab/usertab";
import Login from "../user/login";
import SignUp from "../user/signup";
import { useUser } from "../user/userContext";

const NavBar = () => {
  const { user } = useUser();
  console.log("user Nav", user)
  return (
  <>
    <HStack justifyContent="space-between" px={1} py={1}>
      <BurgerMenu />
      <Image src="assets/LogoName.svg" w="10%" h="10%" px={1} py={1} />
      <Spacer />
      {(user.user) ? (
        <Usertab />
      ) : (
        <>
        <Login />
        <SignUp />
        </>
      )}
      <SearchBar />
    </HStack>
  </>

  );
};
export default NavBar;