// BookmarkButton.jsx
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const BookmarkButton = ({ book, user }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    useEffect(() => {
        // Check if the book is already bookmarked by the user
        // You may need to adjust the condition based on your data structure
        axios.get(`http://localhost:3000/user/${user.user_id}/bookmarked/${book.book_id}`)
        .then((response) => {
            if(response.data.length > 0){
                setIsBookmarked(true);
            }else{
                setIsBookmarked(false);
            }
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }, [user, book]);

    const toggleBookmark = () => {
        if(isBookmarked){
            axios.delete(`http://localhost:3000/user/${user.user_id}/bookmarked/${book.book_id}`)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
        else if(!isBookmarked){
            axios.post(`http://localhost:3000/user/${user.user_id}/bookmarked/${book.book_id}`)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <Box>
            {isBookmarked ? (
                <FaHeart color="red" onClick={toggleBookmark} style={{ cursor: 'pointer' }} />
            ) : (
                <FaRegHeart onClick={toggleBookmark} style={{ cursor: 'pointer' }} />
            )}
        </Box>
    );
};

export default BookmarkButton;
