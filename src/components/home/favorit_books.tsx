import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Box } from "@chakra-ui/react";
import BookCard from "../book/bookCard"
import useBooks from "../../hooks/useBooks";
import { useState } from "react";
import { BookModal } from "../book/bookModal";

export default function FavoriteBooks() {

    const [selectedBook, setSelectedBook] = useState(null);

    const openModal = (book: any) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    const slideLeft = () => {
        const slider = document.getElementById('slider');
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 500;
        }
    }

    const slideRight = () => {
        const slider = document.getElementById('slider');
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 500;
        }
    }

    const { data, error, isLoading } = useBooks();
    const skeleton = [...Array(8).keys()];

    return (
        <>
            <Box margin={3} className="slider_container">
                <Box className='relative flex items-center'>
                    <Box
                        id='slider'
                        className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {data &&
                            data.map((book, index) => (
                                <Box key={book.book_id || index} className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                                    <BookCard book={book} openModal={() => openModal(book)} />
                                </Box>
 
                            ))}
                    </Box>
                    {selectedBook && (
                        <BookModal book={selectedBook} isOpen={!!selectedBook} onClose={closeModal} />
                    )}
                </Box>
                <Box display={"grid"} justifyContent={"end"} className="slider_right">
                    <h3 className="banner_content">Favorite Books</h3>
                    <Box className="flex" justifyContent={"end"} color="white">
                        <MdChevronLeft className='cursor-pointer hover:opacity-100' onClick={slideLeft} size={30} />
                        <MdChevronRight className='cursor-pointer hover:opacity-100' onClick={slideRight} size={30} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}