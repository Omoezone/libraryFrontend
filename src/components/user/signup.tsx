import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	FormLabel,
	Input,
	useDisclosure
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import axios from 'axios'
  import Cookies from 'js-cookie'
  import { useUser } from './userContext';

  const SignUp = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState({
		first_name: "",
		last_name: "",
	  email: "",
	  password: ""
	});

	const { dispatch } = useUser(); 
  
	const handleChange = (e:any) => {
	  const value = e.target.value;
	  setData({
			...data,
			[e.target.name]: value
	  });
	};
  
	const handleSubmit = async (e:any) => {
	  e.preventDefault();
	  const userData = {
			first_name: data.first_name,
			last_name: data.last_name,
			email: data.email,
			password: data.password
	  };
	  try {
      const response = await axios.post("http://localhost:3000/auth/signup", userData);
      // Handle successful response here
      console.log("Axios response:", response);

      // Set the user state (data) in the userContext
      dispatch({ type: 'LOGIN', user: response.data.user });
      // Set the user cookie. JWT encrypted
      Cookies.set("authToken", response.data.authToken);
      onClose();
		} catch (axiosError: any) {
      // Handle the Axios error here
      console.error("Axios Error:", axiosError);
	  }
	};

	const errorStyle = {
		color: 'red'
	}

	const buttonStyleSignUp = {
		width: '97.85%'
	}
  
	return (
	  <>
		<Button variant="primary" onClick={onOpen}>Sign up</Button>
		<Modal isOpen={isOpen} onClose={onClose}>
		  <ModalOverlay />
		  <ModalContent>
			<ModalHeader>Sign up</ModalHeader>
			<ModalCloseButton />
			<form>
			  <ModalBody>
				<FormControl>
					<FormLabel>First name</FormLabel>
				  <Input type='text' name='first_name' placeholder='First name' value={data.first_name} onChange={handleChange} />
					<FormLabel>Last name</FormLabel>
				  <Input type='text' name='last_name' placeholder='Last name' value={data.last_name} onChange={handleChange} />
				  <FormLabel htmlFor='email'>Email</FormLabel>
				  <Input type='email' name='email' placeholder='Email' value={data.email} onChange={handleChange} />
				  <FormLabel htmlFor='password'>Password</FormLabel>
				  <Input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
				</FormControl>
			  </ModalBody>
			  <Button colorScheme='blue' style={buttonStyleSignUp} type='submit' onClick={handleSubmit}>
					Sign up
			  </Button>
			</form>
			<Button variant='ghost'>
			  Or log in
			</Button>
		  </ModalContent>
		</Modal>
	  </>
	)
  };
  
  export default SignUp;