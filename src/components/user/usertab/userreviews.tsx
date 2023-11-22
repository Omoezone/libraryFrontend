import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useUser } from '../userContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function UserReviews() {
  const [reviews, setReviews] = useState([]);
  let user = useUser();
  
  const getReviews = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/user/${user.user.user_id}/reviews`, { "authToken": Cookies.get('authtoken') });
      setReviews(response.data);
      console.log("Reviews:", response.data);
    } catch (error) {
      console.error("Axios Error:", error);
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <ModalHeader fontWeight="bold">Reviews by you</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {reviews.map((review, i) => (
          <div>
            <h3>{review.book_title}</h3>
            <p>{review.review}</p>
          </div>
        ))} 
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </>
  )
}