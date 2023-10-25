import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BookCardContainer = ({ children }: Props) => {
  return (
    <Box p="4px" borderRadius={10} overflow="hidden" width="90%" bg="yellow" borderColor="black">
      {children}
    </Box>
  );
};

export default BookCardContainer;