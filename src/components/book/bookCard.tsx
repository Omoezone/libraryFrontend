
import { Image } from "@chakra-ui/image";
import { Book } from "../../types/book";
import { Card } from "@chakra-ui/react";


interface Props {
  book: Book;
  openModal?: () => void;
}

const BookCard = ({ book, openModal }: Props) => {
  return (
    <>
      <Card 
        maxW="sm"
        onClick={openModal}
        cursor="pointer"
        >
        <Image src={"/assets/covers/" + book.picture} alt="cover"/>        
      </Card>
    </>
  );
};

export default BookCard;