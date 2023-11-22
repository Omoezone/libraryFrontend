import { Icon, HStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, VStack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useUser } from '../user/userContext';
import { useState } from 'react';

const StarRating = ({ value, bookId }) => {
    const maxStars = 5;
    const { user } = useUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  // Ensure the value is within the range [0, 5]
    const normalizedValue = Math.min(Math.max(value, 0), maxStars);

    const stars = Array.from({ length: maxStars }, (_, index) => (
        <Icon
            as={StarIcon}
            key={index}
            color={index < normalizedValue ? 'yellow.400' : 'gray.300'}
            w={5}
            h={5}
            cursor="pointer"
            _hover={{ color: 'green.400' }}
            onClick={() => handleStarClick(index + 1)} // Index starts from 0, so add 1 to get the actual star value      
        />
    ));

    const handleStarClick = async (clickedValue: any) => {
        // Notify the parent component about the changed value
        try {
            const response = await axios.post(`http://localhost:3000/user/${user.user.user_id}/review/${bookId}/${clickedValue}`);
            setIsModalOpen(true);
            console.log(response.data);
        } catch (error) {
            console.log("Error making Axios call for handleStarClick:", error);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <HStack spacing={1}>
                {stars}
            </HStack>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
            <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Text>Thank you for your review!</Text>
                    </VStack>
                </ModalBody>
            </ModalContent>
            </Modal>
        </>
    );
};

export default StarRating;
