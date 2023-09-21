import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Center,
	FormControl,
	FormLabel,
	Input,
	useDisclosure
} from '@chakra-ui/react'
import React, { useState } from 'react';


	


export default function Signup() {
	const [formData, setFormData] = useState({
		password: '',
		confirmPassword: '',
	});

	const [passwordsMatch, setPasswordsMatch] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure()
	
	return (
		<>
			<Button onClick={onOpen}>Sign in</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Sign in</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Username</FormLabel>
							<Input type='text' placeholder='Username' />
							<FormLabel>Email</FormLabel>
							<Input type='text' placeholder='Email' />
							<FormLabel>Password</FormLabel>
							<Input type="password" placeholder='Password' />
							<FormLabel>Confirm password</FormLabel>
							<Input type="password" placeholder='Repeat assword' />
						</FormControl>
					</ModalBody>
	
					<ModalFooter>
						<Center>
							<Button colorScheme='blue' mr={3} onClick={onClose}>
								Sign up
							</Button>
							<Button variant='ghost'>
								Or log in
							</Button>
						</Center>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}