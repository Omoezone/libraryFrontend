import { Box, Button, Flex } from "@chakra-ui/react"
import SearchBar from "../navigation/searchbar"
import BookCard from "../book/bookCard"
import BookCardSkeleton from "../book/bookCardSkeleton";
import useBooks from "../../hooks/useBooks";
import Sorting from "../filter/sorting"
import { useState } from "react";
import { BookModal } from "../book/bookModal";
import { Card } from "@chakra-ui/react";


import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'



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
    const [show, setShow] = useState(false);

    const onChangeSearch = () => {
        setVisible(!visible);
    };

    const [themeList, setThemeList] = useState([]);



    const addTheme = (e: any) => {
        if (themeList.includes(e) === true) {
            themeList.map((theme: any) => {
                /*   console.log(theme) */
                for (let key in themeList) {
                    if (themeList[key] === e) {
                        const newArr = [...themeList]

                        for (let key in themeList) {
                            if (newArr[key] === undefined) {
                                delete newArr[key]
                            }
                        }

                        delete themeList[key]
                        setThemeList(newArr)
                        console.log(e)
                        console.log(newArr)
                    }

                }


            })
        } else if (themeList.includes(e) === false) {
            const newArr = [...themeList]
            console.log(e)
            newArr.push(e)
            setThemeList(newArr)
            console.log(newArr + "lå")
        }

    };


    /*   console.log(theme) */


    const [fantasy, setFantasy] = useState(false);
    const [nonFiction, setNonFiction] = useState(false);

    /* console.log(Array.isArray(data)); */

    const tags = data && data.map((book: any) => {
        return Object.values(book.Tags.map((tag: any) => {
            /*   return tag.map((val: [any]) => { return val }) */

            return tag.title


            /* tag.title.filter((tag.title) => tag.title.length > 6) */

        }))[0]
    });
    /*    console.log(tags) */

    /*   const cleanTags = tags.filter((x: any) => x !== undefined);
     
      const fantasy = cleanTags.filter((cleanTags: string) => cleanTags == "Fantasy");
     
      console.log("filter");
      console.log(cleanTags);
      console.log("filter"); */

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

                                for (let key in data) {
                                    if (data[key] === undefined) {
                                        delete data[key];
                                    } else {

                                        if (tag.title == filterTerm) {

                                            return (<BookCard book={book} key={book.book_id} openModal={() => openModal(book)} />)
                                        }
                                    }
                                }

                            }))
                        })}
                    {/*         <Box key={book.book_id || index}>

                        <BookCard book={book} openModal={() => openModal(book)} />
                        {book.Tags.map((tag: any) => {
                            return tag.title
                        })}


                    </Box>
                        ))}  */}
                </Box>
                <Box className="hide_on_mobil">
                    <Sorting />
                    {/* <Subdjekt show={show} onShowChange={setShow} /> */}
                    <Button onClick={() => {
                        setFantasy(!fantasy)
                        setShow(!show)
                        setFilterTerm("Fantasy")
                        addTheme(filterTerm);
                    }}
                        variant={fantasy ? 'select' : 'selected'}>
                        Fantasy
                        {fantasy ? <SmallAddIcon /> : <CheckIcon />}
                    </Button>
                    <Button onClick={() => {
                        setNonFiction(!nonFiction)
                        setShow(!show)
                        setFilterTerm("Non-Fiction")
                        addTheme(filterTerm);

                    }}
                        variant={nonFiction ? 'select' : 'selected'}>
                        Non-Fiction
                        {nonFiction ? <SmallAddIcon /> : <CheckIcon />}
                    </Button>
                </Box>

            </Box>
        </>
    )
}