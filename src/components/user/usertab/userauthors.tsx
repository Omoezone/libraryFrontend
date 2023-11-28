import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Link,
    HStack
  } from '@chakra-ui/react'
import { useUser } from '../userContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import AuthorInfoModal from '../../book/authorModal';

export default function UserFavoritedAuthors() {
	const [favAuthors, setFavAuthors] = useState([]);
	const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
	const { user } = useUser();
	
	const getFavoritedAuthors = async () => {
		try {
		const response = await axios.post(`http://localhost:3000/user/${user.user.user_id}/favoritedAuthors`, { "authToken": Cookies.get('authToken') });
		console.log(response.data)
		setFavAuthors(response.data);
		} catch (error) {
		console.error("Axios Error:", error);
		}
	}

	const handleClickableAuthor = () => {
        setIsAuthorModalOpen(true);
    };

	useEffect(() => {
		getFavoritedAuthors();
	}, []);

	return (
		<>
			<ModalHeader fontWeight="bold">Authors favorited by you</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				{favAuthors.map((author, i) => (
				<HStack 
				borderColor='black'
				borderWidth='1px'
				p='1rem'>
					<Link as="u" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleClickableAuthor(); }}>{author.Author.username || "No Author"}</Link>
					<AuthorInfoModal
						isOpen={isAuthorModalOpen}
						onClose={() => setIsAuthorModalOpen(false)}
						author={author.Author}
					/>
				</ HStack>
				))} 
			</ModalBody>
			<ModalFooter>
			</ModalFooter>
		</>
	)
}