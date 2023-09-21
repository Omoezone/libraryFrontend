import { Input, InputGroup, Icon, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";


const SearchBar = () => {
    const inputSize = "xs";
    const borderSpace = 4;
  return (
    <InputGroup size={inputSize} width="30%" >
      <InputRightElement pointerEvents="none">
        <Icon as={SearchIcon} color="gray.400"/>
      </InputRightElement>
      <Input type="text" variant="filled"  placeholder="Search" size={inputSize} borderRadius={15} />
    </InputGroup>
  );
};

export default SearchBar;
