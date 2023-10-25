import BookCard from "./bookCard";
import BookCardSkeleton from "./bookCardSkeleton";
import BookCardContainer from "./bookCardContainer";
import useBooks from "../../hooks/useBooks";
import { Grid, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { BookModal } from "./bookModal";

const BookGrid = () => {
  const { data, error, isLoading } = useBooks();
  const [selectedBook, setSelectedBook] = useState(null);
  const skeletons = [...Array(20).keys()]; 

  const openModal = (book:any) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      {error && <p>{error.message}</p>}
      <SimpleGrid
        columns={{
          base: 2,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={4}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <BookCardContainer key={skeleton}>
              <BookCardSkeleton />
            </BookCardContainer>
          ))}
        
        {data &&
          data.map((book, index) => (
            <BookCardContainer key={book.book_id || index}>
              <BookCard book={book} openModal={() => openModal(book)}/>
            </BookCardContainer>
          ))}
      </SimpleGrid>
      {selectedBook && (
          <BookModal book={selectedBook} isOpen={!!selectedBook} onClose={closeModal} />
      )}
    </div>
  );
};

export default BookGrid;
