import { StarIcon } from '@chakra-ui/icons';
import { Modal, ModalOverlay,ModalContent, Box, ModalBody, ModalCloseButton, Text, HStack, Spacer, Icon, VStack, StackDivider, Flex } from '@chakra-ui/react';
import StarRating from './stars';
import TagButton from './bookModalTags';

export const BookModal = ({ book, isOpen, onClose }) => {   
    const amountAvailable = book.available_amount;
    console.log(book);
    const amountStyles = {
        color: amountAvailable === 0 ? "red" : amountAvailable <= 3 ? "yellow" : "green",
        padding: "1rem",
        textAlign: "center",
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                src={"/assets/covers/" + book.picture} 
                alt={book.picture} 
                style= {{
                    maxWidth: '100%',
                    maxHeight: '70vh', 
                    alignSelf: 'center',
                }}>
                </img>
                <VStack 
                spacing={4}
                align='stretch'>
                    <Box>
                        <Box>
                            <Text style={amountStyles}>Available: {book.available_amount || 0}</Text>
                        </Box>
                    </Box>
                    <HStack spacing={4}>
                        <Text as="b" fontSize="md">{book.title || "No Title"}</Text>
                        <Text as="u">{book.Author.username || "No Author"}</Text>
                        <StarRating value={book.Reviews[0].stars || 3} />
                    </HStack>
                    <Box padding={5}>
                        <Text>{book.summary || "No Description"}</Text>
                    </Box>
                    <Flex justifyContent="space-between">
                        {book.Tags.map((tag) => (
                            <TagButton key={tag.title} tag={tag} />
                        )) || "No Genres"}
                    </Flex>
                </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};