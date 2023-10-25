
import { Image } from "@chakra-ui/image";
import { Book } from "../../types/book";
import { Box } from "@chakra-ui/react";
import Cover from "../../../public/assets/covers/book1.jpg"


interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <>
      <Box>
        <Image src={"../../../public/assets/covers/" + book.picture} alt="cover" />

        {/*  <p>{book.available_amount > 0 ? "In stock" : "Out of stock"}</p> */}
      </Box>
    </>
  );
};

export default BookCard;