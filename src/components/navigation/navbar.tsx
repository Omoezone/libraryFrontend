import { HStack, Image, Spacer, Text} from "@chakra-ui/react";
import BurgerMenu from "./burger";
import SearchBar from "./searchbar";
import Userpage from "../user/userpage";
import useData from "../../hooks/useData";
import { useState } from "react";

interface Author {
  id: number;
  username: string;
  total_books: string[];
}

const NavBar = () => {
  const [id, setId] = useState(1); 
  const { data, error } = useData<Author>("author/" + id);

  return (
  <>
    <HStack justifyContent="space-between" px={1} py={1}>
      <BurgerMenu />
      <button onClick={() => setId(id + 1)}>Click me</button>
      <div>
        {data && (
          <Text fontSize="lg" fontWeight="bold">
            <p>{(data as Author).username}</p>
            <p>{(data as Author).total_books}</p>
          </Text>
        )}
      </div>
      {/* make this shit match with a grid maybe?*/}
      <Image src="assets/LogoName.svg" w="10%" h="10%" px={1} py={1} />
      <Spacer />
      <Userpage />
      <SearchBar />
    </HStack>
  </>
  );
};
  export default NavBar;