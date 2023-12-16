// BookmarkButton.jsx
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { currentConfig } from '../../../config';
import { Author } from '../../types/author';
import { User } from '../../types/user';

interface Props {
    author: Author;
    user: User;
}
const FavoritedButton = ({ author, user }: Props) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const endpoint = currentConfig.apiEnvEndpoint;

    useEffect(() => {
        // Check if the book is already bookmarked by the user
        // You may need to adjust the condition based on your data structure
        axios.get(`${endpoint}/user/${user.user_id}/author/${author.author_id}`)
        .then((response) => {
            if(response.data.favorited_id){
                setIsFavorited(true);
            }else{
                setIsFavorited(false);
            }
            console.log("Response", response, "IsFavorited", isFavorited);
        }).catch((error) => {
            console.log(error);
        });
    }, [user, author]);

    const toggleFavorited = () => {
        if(isFavorited){
            axios.delete(`${endpoint}/user/${user.user_id}/author/${author.author_id}`)
            .then((response) => {
                console.log("IsFavorited", response);
            }).catch((error) => {
                console.log(error);
            });
        }
        else if(!isFavorited){
            axios.post(`${endpoint}/user/${user.user_id}/author/${author.author_id}`, { "authToken": Cookies.get('authToken') })
            .then((response) => {
                console.log("IsNotFavorited", response);
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <Box>
            {isFavorited ? (
                <FaHeart color="red" onClick={toggleFavorited} style={{ cursor: 'pointer' }} />
            ) : (
                <FaRegHeart onClick={toggleFavorited} style={{ cursor: 'pointer' }} />
            )}
        </Box>
    );
};

export default FavoritedButton;
