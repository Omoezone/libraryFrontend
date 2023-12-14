import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Link,
    HStack,
	Box,
	Spacer
  } from '@chakra-ui/react'
import { useUser } from '../userContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import AuthorInfoModal from '../../book/authorModal';
import FavoritedButton from '../../book/favorited';
import { currentConfig } from '../../../../config';

export default function UserFavoritedAuthors() {
	const [favAuthors, setFavAuthors] = useState([]);
	const { user } = useUser();
	const [isAuthorModalOpenArray, setIsAuthorModalOpenArray] = useState(Array(favAuthors.length).fill(false));
    const endpoint = currentConfig.apiEnvEndpoint;

	const handleClickableAuthor = (index: any) => {
		const newIsAuthorModalOpenArray = [...isAuthorModalOpenArray];
		newIsAuthorModalOpenArray[index] = true;
		setIsAuthorModalOpenArray(newIsAuthorModalOpenArray);
	};
	
	const getFavoritedAuthors = async () => {
		try {
		const response = await axios.post(`${endpoint}/user/${user.user.user_id}/favoritedAuthors`, { "authToken": Cookies.get('authToken') });
		console.log("Favauthor", response.data)
		setFavAuthors(response.data);
		} catch (error) {
		console.error("Axios Error:", error);
		}
	}

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
					<Link as="u" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleClickableAuthor(i); }}>{author.Author.username || "No Author"}</Link>
					<AuthorInfoModal
						isOpen={isAuthorModalOpenArray[i]}
						onClose={() => {
						  const newIsAuthorModalOpenArray = [...isAuthorModalOpenArray];
						  newIsAuthorModalOpenArray[i] = false;
						  setIsAuthorModalOpenArray(newIsAuthorModalOpenArray);
						}}
						author={author.Author}
					/>
					<Spacer />
					<Box>
						<FavoritedButton author={author.Author} user={user.user}/>
					</Box>
					
				</ HStack>
				))} 
			</ModalBody>
			<ModalFooter>
			</ModalFooter>
		</>
	)
}