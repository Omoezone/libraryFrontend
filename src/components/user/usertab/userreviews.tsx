import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Icon,
    Spacer,
    Box,
    HStack
  } from '@chakra-ui/react'
import { useUser } from '../userContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { StarIcon } from '@chakra-ui/icons';
import { currentConfig } from '../../../../config';

export default function UserReviews() {
  const [reviews, setReviews] = useState([]);
  const { user } = useUser();
  const endpoint = currentConfig.apiEnvEndpoint;

  const getReviews = async () => {
    try {
      const response = await axios.post(`${endpoint}/user/${user.user.user_id}/reviews`, { "authToken": Cookies.get('authToken') });
      setReviews(response.data);
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
          <HStack 
          borderColor='black'
          borderWidth='1px'
          p='1rem'>
          <Box>
            <h3>{review.Book.title}</h3>
          </Box>
          <Spacer />
          <Box
          pb='0.5rem'>
            {Array.from({ length: review.stars }, (_, index) => (
              <Icon
                  as={StarIcon}
                  key={index}
                  color='yellow.400'
                  w={5}
                  h={5} 
              />
            ))}
          </Box>
          </ HStack>
        ))} 
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </>
  )
}