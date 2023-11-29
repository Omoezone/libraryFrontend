import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Spacer,
    Box,
    HStack
} from '@chakra-ui/react'
import { useUser } from '../userContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import BookmarkButton from '../../book/bookmark';

export default function UserBookmarked() {
const [bookmarks, setBookmarks] = useState([]);
const { user } = useUser();

const getBookmarks = async () => {
    try {
        const response = await axios.post(`http://localhost:3000/user/${user.user.user_id}/bookmarks/`, { "authToken": Cookies.get('authToken') });
        setBookmarks(response.data);
        console.log("Response:", response.data)
        console.log("user:", user);
    } catch (error) {
        console.error("Axios Error:", error);
    }
}

useEffect(() => {
getBookmarks();
}, []);

return (
<>
    <ModalHeader fontWeight="bold">You have bookmarked these</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    {bookmarks.map((bookmark, i) => (
        <HStack 
        borderColor='black'
        borderWidth='1px'
        p='1rem'>
        <Box>
        <h3>{bookmark.Book.title}</h3>
        </Box>
        <Spacer />
        <Box
        pb='0.5rem'>
            <BookmarkButton book={bookmark} user={user.user} />
        </Box>
        </ HStack>
    ))} 
    </ModalBody>
    <ModalFooter>
    </ModalFooter>
</>
)
}