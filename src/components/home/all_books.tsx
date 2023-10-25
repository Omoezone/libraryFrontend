import { Box, Flex } from "@chakra-ui/react"
import SearchBar from "../navigation/searchbar"
import BookCard from "../book/bookCard"
import BookCardSkeleton from "../book/bookCardSkeleton";
import useBooks from "../../hooks/useBooks";
import Sorting from "../filter/sorting"

export default function AllBooks() {

    const { data, error, isLoading } = useBooks();
    const skeleton = [...Array(20).keys()];

    return (
        <>
            <Box className="all_books_top">
                <h2 className="hero_text">All Books</h2>
                <Box className="flex" justifyContent={"center"} marginBottom={3}>
                    <SearchBar />
                </Box>
            </Box>
            <Box id="all_books_container_container">

                <Box id="all_books_container">
                    {error && <p>{error.message}</p>}
                    {isLoading &&
                        skeleton.map((skeleton) => (

                            <Box key={skeleton}>
                                <BookCardSkeleton />
                            </Box>

                        ))}

                    {data &&
                        data.map((book, index) => (
                            <Box key={book.book_id || index}>
                                <BookCard book={book} />
                            </Box>
                        ))}

                </Box>
                <Box className="hide_on_mobil">
                    <Sorting />
                </Box>
            </Box>
        </>
    )
}