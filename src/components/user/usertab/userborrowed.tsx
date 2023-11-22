import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
  } from '@chakra-ui/react'
import Theme from '../../../theme';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import { BookModal } from '../../book/bookModal';
import BookCard from '../../book/bookCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function Userborrowed() {
    const [selectedBook, setSelectedBook] = useState(null);
    const [borrowed, setBorrowed] = useState([]);
    const scrollBehavior = 'inside';

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

    const getBorrowed = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/user/${user.user.user_id}/borrowed`, { "authToken": Cookies.get('authtoken') });
            setBorrowed(response.data);
            console.log("Reviews:", response.data);
        } catch (error) {
            console.error("Axios Error:", error);
        }
    }

    useEffect(() => {
        getBorrowed();
    }, []);

    return (
        <>
        <ModalHeader fontWeight="bold">Your info</ModalHeader>
        <ModalCloseButton />
        <ModalBody scrollBehavior={scrollBehavior}>
        <Box margin={3} className="slider_container">
                <Box className='relative flex items-center'>
                    <Box
                        id='slider'
                        className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {borrowed.map((book, index) => (
                                /*  <Img
                                     key={book.book_id || index}
                                     shadow={1}
                                     className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                                     src={"../../../public/assets/covers/" + book.picture}
                                     alt='/'
                                 /> */
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
                    <h3 className="banner_content">Favorit Books</h3>
                    <Box className="flex" justifyContent={"end"} color="white">
                        <MdChevronLeft className='cursor-pointer hover:opacity-100' onClick={slideLeft} size={30} />
                        <MdChevronRight className='cursor-pointer hover:opacity-100' onClick={slideRight} size={30} />
                    </Box>
                </Box>
            </Box>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </>
    );
}