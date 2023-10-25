import BookCard from "./bookCard";
import BookCardSkeleton from "./bookCardSkeleton";
import BookCardContainer from "./bookCardContainer";
import useBooks from "../../hooks/useBooks";
import { Grid, SimpleGrid } from "@chakra-ui/react";

const BookGrid = () => {
  const { data, error, isLoading } = useBooks(); // Assuming useBooks provides the entire array

  const skeletons = [...Array(20).keys()]; // Number of skeletons you want to show
  console.log("DATA IS: ", data)
  console.log("data.results is: ", data?.results)
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
              <BookCard book={book} />
            </BookCardContainer>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default BookGrid;
