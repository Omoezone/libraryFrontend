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

    const [show, setShow] = useState("All books");
    const [filterTerm, setFilterTerm] = useState("All");
    /*  const [visible, setVisible] = useState(true);
 
     const onChangeSearch = () => {
         setVisible(!visible);
     }; */
    const removeValue = () => {
        setsearchTerm("")
        console.log(searchTerm)
    }


    console.log(searchTerm)

    return (
        <>
            <Box className="all_books_top">
                <h2 className="hero_text">All Books</h2>
                <Box className="flex" justifyContent={"center"} marginBottom={3}>
                    {/* <SearchBar /> */}

                    <input type="text" className="shade" placeholder="Search for book title"
                        value={searchTerm}
                        onBlurCapture={removeValue}
                        onChange={(event) => {
                            setsearchTerm(event.target.value);
                            if (searchTerm.length < 1) {
                                setShow("Searched books");
                            }
                        }} />
                </Box>

            </Box>


            <Box id="all_books_container_container">
                <Box id="all_books_container" className={` ${show === "All books" ? "show" : "hidden"}`}>
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

                <Box id="filtered_books_container" className={` ${show === "Filtered books" ? "show" : "hidden"}`}>

                    {data &&
                        data.map((book: any) => {
                            return Object.values(book.Tags.map((tag: any) => {

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
                <Box id="searched_books_container" className={` ${show === "Searched books" ? "show" : "hidden"}`}>
                    {/*  <h3 className={` ${show === "Searched books" ? "show" : "hidden"}`}>{ } Results for "{searchTerm}":</h3> */}
                    {data &&
                        data.map((book: any) => {
                            if (searchTerm === "") {
                                if (show === "Searched books") {
                                    setShow("All books");
                                }
                            } else if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return <BookCard book={book} key={book.book_id} openModal={() => openModal(book)} />
                            }




                            /* return (
                                <BookCard book={book} key={book.book_id} openModal={() => openModal(book)} />) */
                        })}

                </Box>
                <Box className="hide_on_mobil">
                    {/*  <Sorting /> */}
                    {/* <Subdjekt show={show} onShowChange={setShow} /> */}
                    <Button onClick={() => {
                        setFilterTerm("All")
                        setShow("All books")
                    }}
                        variant={filterTerm === 'All' ? 'selected' : 'select'}>
                        All
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Fantasy")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Fantasy' ? 'selected' : 'select'}>
                        Fantasy
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Non-Fiction")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Non-Fiction' ? 'selected' : 'select'}>
                        Non-Fiction
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Biography")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Biography' ? 'selected' : 'select'}>
                        Biography
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Mystery")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Mystery' ? 'selected' : 'select'}>
                        Mystery
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Self-Help")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Self-Help' ? 'selected' : 'select'}>
                        Self-Help
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Romance")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Romance' ? 'selected' : 'select'}>
                        Romance
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Science Fiction")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Science Fiction' ? 'selected' : 'select'}>
                        Science Fiction
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("Adventure")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Adventure' ? 'selected' : 'select'}>
                        Adventure
                    </Button>

                    <Button onClick={() => {
                        setFilterTerm("History")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'History' ? 'selected' : 'select'}>
                        History
                    </Button>

                </Box>

            </Box>
        </>
    )
}