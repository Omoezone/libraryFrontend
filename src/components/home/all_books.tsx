import { Box, Button, Flex } from "@chakra-ui/react"
import SearchBar from "../navigation/searchbar"
import BookCard from "../book/bookCard"
import BookCardSkeleton from "../book/bookCardSkeleton";
import useBooks from "../../hooks/useBooks";
import Sorting from "../filter/sorting"
import { useState } from "react";
import { BookModal } from "../book/bookModal";
import { Card } from "@chakra-ui/react";


import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons';




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

    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [show, setShow] = useState(false);

    const onChangeSearch = () => {
        setVisible(!visible);
    };

    const [filterTerm, setFilterTerm] = useState("All");


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


                <Box id="all_books_container" className={` ${show ? "hidden" : "show"}`}>
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

                <Box id="filtered_books_container" className={` ${show ? "show" : "hidden"}`}>

                    {data &&
                        data.map((book: any) => {
                            return Object.values(book.Tags.map((tag: any) => {
                                console.log(tag.title)
                                for (let key in data) {
                                    if (data[key] === undefined) {
                                        delete data[key];
                                    } else {

                                        if (tag.title == filterTerm /* || filterTerm.includes.(tag.title) */) {

                                            return (
                                                <BookCard book={book} key={book.book_id} openModal={() => openModal(book)} />)
                                        }
                                    }
                                }

                            }))
                        })}

                </Box>
                <Box className="hide_on_mobil">
                    {/*  <Sorting /> */}
                    {/* <Subdjekt show={show} onShowChange={setShow} /> */}
                    <Button onClick={() => {
                        setFilterTerm("All")
                        setShow(false)
                    }}
                        variant={filterTerm === 'All' ? 'selected' : 'select'}>
                        All
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Fantasy")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Fantasy' ? 'selected' : 'select'}>
                        Fantasy
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Non-Fiction")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Non-Fiction' ? 'selected' : 'select'}>
                        Non-Fiction
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Biography")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Biography' ? 'selected' : 'select'}>
                        Biography
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Mystery")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Mystery' ? 'selected' : 'select'}>
                        Mystery
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Self-Help")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Self-Help' ? 'selected' : 'select'}>
                        Self-Help
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Romance")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Romance' ? 'selected' : 'select'}>
                        Romance
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Science Fiction")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Science Fiction' ? 'selected' : 'select'}>
                        Science Fiction
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Adventure")
                        setShow(true)
                    }}
                        variant={filterTerm === 'Adventure' ? 'selected' : 'select'}>
                        Adventure
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("History")
                        setShow(true)
                    }}
                        variant={filterTerm === 'History' ? 'selected' : 'select'}>
                        History
                    </Button>

                </Box>

            </Box>
        </>
    )
}