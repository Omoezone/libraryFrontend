import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Text, VStack, UnorderedList, ListItem, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Book } from '../../types/book';
import BookCard from './bookCard';
import FavoritedButton from './favorited';
import { useUser } from '../user/userContext';

const AuthorInfoModal = ({ isOpen, onClose, author }) => {
    const [booksByAuthor, setBooksByAuthor] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        if (isOpen) {
            // Adjust the API endpoint based on your server logic
            console.log("author: ", author);
            axios.get(`http://localhost:3000/author/${author.author_id}/books`)
                .then(response => {
                    console.log(response)
                    setBooksByAuthor(response.data);
                })
                .catch(error => {
                    console.error('Error fetching books by author:', error);
                });
        }
    }, [isOpen, author]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="light.gradient">
            <ModalCloseButton />
            <ModalBody>
            <VStack spacing={4}>
                <h2><b>{author.username || "No Author Information"}</b></h2>{user.user ? (
                        <FavoritedButton author={author} user={user.user} />
                    ) : (<></>)}
                <p>{author.total_books}: Published Books</p>
                <Box id='slider'
                        className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'> 
                    {booksByAuthor.map(book => (
                        <Box key={book.book_id || index} className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                            <BookCard book={book} openModal={() => openModal(book)}/>
                        </Box>
                    ))}
                </Box>'
            </VStack>
            </ModalBody>
        </ModalContent>
        </Modal>
    );
};

export default AuthorInfoModal;
