import { Box, Button, Flex } from "@chakra-ui/react"
import BookCard from "../book/bookCard"
import BookCardSkeleton from "../book/bookCardSkeleton";
import useBooks from "../../hooks/useBooks";
import { useState } from "react";
import { BookModal } from "../book/bookModal";
import { Input, InputGroup, Icon, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function AllBooks() {
    const { data, error, isLoading } = useBooks();
    const [selectedBook, setSelectedBook] = useState(null);
    const skeleton = [...Array(20).keys()];
    const [searchTerm, setsearchTerm] = useState("");
    const [show, setShow] = useState("All books");
    const [filterTerm, setFilterTerm] = useState("All");

    const openModal = (book: any) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    const removeValue = (e: any) => {
        if (e.relatedTarget.type === "button") {
            setsearchTerm("")
        } else { }
    }

    return (
        <>
            <Box className="all_books_top">
                <h2 className="hero_text">All Books</h2>
                <Box className="flex" justifyContent={"center"} marginBottom={3}>
                    {/* <SearchBar /> */}

                    <InputGroup margin={3} w={80}>
                        <InputRightElement pointerEvents="none">
                            <Icon as={SearchIcon} color="gray.400" />
                        </InputRightElement>
                        <Input type="text" className="shade" placeholder="Search for book title" variant="filled" borderRadius={100}
                            value={searchTerm}
                            onBlurCapture={(e) => { removeValue(e) }}
                            onChange={(event) => {
                                setsearchTerm(event.target.value);
                                if (searchTerm.length < 1) {
                                    setShow("Searched books");
                                }
                            }} />
                    </InputGroup>
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
                        })}

                </Box>
                <Box className="hide_on_mobil">
                    {/*  <Sorting /> */}
                    {/* <Subdjekt show={show} onShowChange={setShow} /> */}
                    <Button w={40} onClick={() => {
                        setFilterTerm("All")
                        setShow("All books")
                    }}
                        variant={filterTerm === 'All' ? 'selected' : 'select'}>
                        All
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Fantasy")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Fantasy' ? 'selected' : 'select'}>
                        Fantasy
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Non-Fiction")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Non-Fiction' ? 'selected' : 'select'}>
                        Non-Fiction
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Biography")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Biography' ? 'selected' : 'select'}>
                        Biography
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Mystery")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Mystery' ? 'selected' : 'select'}>
                        Mystery
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Self-Help")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Self-Help' ? 'selected' : 'select'}>
                        Self-Help
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Romance")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Romance' ? 'selected' : 'select'}>
                        Romance
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Science Fiction")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Science Fiction' ? 'selected' : 'select'}>
                        Science Fiction
                    </Button>

                    <Button w={40} onClick={() => {
                        setFilterTerm("Adventure")
                        setShow("Filtered books")
                    }}
                        variant={filterTerm === 'Adventure' ? 'selected' : 'select'}>
                        Adventure
                    </Button>

                    <Button w={40} onClick={() => {
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