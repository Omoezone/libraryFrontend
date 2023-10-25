import { Box } from "@chakra-ui/react"
import SearchBar from "../navigation/searchbar"
import BookCard from "../book/bookCard"
import BookCardSkeleton from "../book/bookCardSkeleton";
import BookCardContainer from "../book/bookCardContainer";
import useBooks from "../../hooks/useBooks";

export default function AllBooks() {

    const { data, error, isLoading } = useBooks();
    const skeleton = [...Array(20).keys()];

    return (
        <>
            <h2 className="hero_text">All Books</h2>
            <Box className="flex" justifyContent={"center"} marginBottom={3}>
                <SearchBar />
            </Box>
            <Box id="all_books_container">
                {error && <p>{error.message}</p>}
                {isLoading &&
                    skeleton.map((skeleton) => (
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

            </Box>
        </>
    )
}