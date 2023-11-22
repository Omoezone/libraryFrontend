import { Box, Flex } from "@chakra-ui/react"
import SearchBar from "../navigation/searchbar"
import BookCard from "../book/bookCard"
import BookCardSkeleton from "../book/bookCardSkeleton";
import useBooks from "../../hooks/useBooks";
import Sorting from "../filter/sorting"
import { useState } from "react";
import { BookModal } from "../book/bookModal";
import { Card } from "@chakra-ui/react";


export default function AllBooks() {

    const { data, error, isLoading } = useBooks();
    const [selectedBook, setSelectedBook] = useState(null);
    const skeleton = [...Array(20).keys()];

    const openModal = (book: any) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    const [searchTerm, setsearchTerm] = useState("");
    const [filterTerm, setFilterTerm] = useState("");
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);

    const onChangeSearch = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Box className="all_books_top">
                <h2 className="hero_text">All Books</h2>
                <Box className="flex" justifyContent={"center"} marginBottom={3}>
                    {/* <SearchBar /> */}
                    <input type="text" className="shade" placeholder="Search for book title"
                        onChange={(event) => {
                            setsearchTerm(event.target.value);
                            if (searchTerm.length < 1) {
                                onChangeSearch();
                            }
                        }} />
                </Box>
                <h3 className={`hidden ${visible ? "hidden" : "show"}`}>{ } Results for "{searchTerm}":</h3>
            </Box>

            <Box id="all_books_container_container">
                {data &&
                    data.map((book, index) => (
                        <Box className="result_container">
                            {book.filter((val: any) => {
                                return val;
                            })}
                            <BookCard book={book} openModal={() => openModal(book)} />

                        </Box>
                    ))}
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
                                <BookCard book={book} openModal={() => openModal(book)} />
                            </Box>
                        ))}
                </Box>
                {selectedBook && (
                    <BookModal book={selectedBook} isOpen={!!selectedBook} onClose={closeModal} />
                )}
                <Box className="hide_on_mobil">
                    <Sorting />
                </Box>
            </Box>
        </>
    )
}