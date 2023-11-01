
import { Image } from "@chakra-ui/image";
import { Book } from "../../types/book";
import { Box, Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import Cover from "../../../public/assets/covers/book1.jpg"


interface Props {
  book: Book;
  openModal?: () => void;
}

const BookCard = ({ book, openModal }: Props) => {
  return (
    <>
      <Card maxW="sm"
        onClick={openModal}
        cursor="pointer">
        <Image src={"/assets/covers/" + book.picture} alt="cover" />        
      </Card>
    </>
  );
};

export default BookCard;