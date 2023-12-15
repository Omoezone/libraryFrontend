import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Spacer,
    HStack,
    Button,
    Text,
} from '@chakra-ui/react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useUser } from '../userContext'
import { currentConfig } from '../../../../config';

export default function Userborrowed() {
    const [borrowed, setBorrowed] = useState([]);
    const [hasBorrowed, setHasBorrowed] = useState([]);
    const [history, setHistory] = useState(true);
    const { user } = useUser()
    const endpoint = currentConfig.apiEnvEndpoint;

    const getBorrowed = async () => {
        try {
            const response = await axios.post(`${endpoint}/user/${user.user.user_id}/borrowed`, { "authToken": Cookies.get('authToken') });
            setBorrowed(response.data);
            // 
            const response2 = await axios.post(`${endpoint}/user/${user.user.user_id}/hasborrowed`, { "authToken": Cookies.get('authToken') });
            setHasBorrowed(response2.data);
        } catch (error) {
            console.error("Axios Error:", error);
        }
    }
    const returnBook = async (book: string) => {
        try {
            console.log("Book to return", book);
            const response = await axios.put(`${endpoint}/user/${user?.user?.user_id}/return/${book}`, { "authToken": Cookies.get('authToken') });
            getBorrowed();
            console.log("Returned book", response.data);
        } catch (error) {
            console.error("Axios Error:", error);
        }
    }


    useEffect(() => {
        getBorrowed();
    }, []);

    return (
        <>
            <ModalHeader fontWeight="bold">These are your current books</ModalHeader>
            <ModalCloseButton color='light.solid' />
            <ModalBody>
                <HStack marginBottom="2rem">
                    {history ? (
                        <>
                            <Text>To see your borrow history, click here</Text>
                            <Button variant="selected" onClick={() => setHistory(false)}>History</Button>
                        </>
                    ) : (
                        <>
                            <Text>To see your current books, click here</Text>
                            <Button variant="selected" onClick={() => setHistory(true)}>Current books</Button>
                        </>)}
                </HStack>
                {history ? (
                    <>
                        {borrowed.length != 0 ? (
                            <>
                                {borrowed.map((borrow, i) => (
                                    <HStack
                                        borderColor='black'
                                        borderWidth='1px'
                                        p='1rem'>
                                        <Box>
                                            <h3>{borrow.Book.title}</h3>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <Button variant="selected" onClick={() => returnBook(borrow.book_id)}>Return</Button>
                                        </Box>
                                    </ HStack>
                                ))}
                            </>
                        ) : (
                            <Text>You have no current books</Text>
                        )}
                    </>
                ) : (
                    <>
                        {hasBorrowed.map((borrow, i) => (
                            <HStack
                                borderColor='black'
                                borderWidth='1px'
                                p='1rem'>
                                <Box>
                                    <h3>{borrow.Book.title}</h3>
                                </Box>
                            </ HStack>
                        )
                        )}
                    </>
                )}
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
        </>
    );
}