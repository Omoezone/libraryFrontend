
import { Image } from "@chakra-ui/image";
import { Book } from "../../types/book";
import { Box, Card, CardBody, Flex, HStack, Heading } from "@chakra-ui/react";
import TagButton from "../book/bookModalTags";




interface Props {
  book: Book;
  openModal?: () => void;
}

const BookCard = ({ book, openModal }: Props) => {
  return (
    <>
      <Card
        onClick={openModal}
        cursor="pointer">
        <Image width={"10rem"} src={"/assets/covers/" + book.picture} alt="cover" />

      </Card>
    </>
  );
};



export default BookCard;