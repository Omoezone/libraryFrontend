import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Book } from "../../types/book";
import { Heading } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";


interface Props {
  book: Book;
  openModal?: () => void;
}

const GameCard = ({ book, openModal }: Props) => {
  return (
    <>
      <Card maxW="sm"
        onClick={openModal}
        cursor="pointer">
        <Image src={"https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=40"}/>
        <CardBody>
          <HStack wrap="wrap" justifyContent="space-between"/>
          <Heading>{book.title}</Heading>
          <p>{book.available_amount > 0 ? "In stock" : "Out of stock"}</p>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;