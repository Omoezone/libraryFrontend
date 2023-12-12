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
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useUser } from './userContext';
import { currentConfig } from '../../../config';

const Login = () => {
  const endpoint = currentConfig.apiEnvEndpoint;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { dispatch } = useUser(); 

  const validateForm = (data) => {
		let errorlist = [];
	
		// Validate email
		if (!data.email.trim()) {
		  errorlist.push('Email is required');
		} else if (!/.*@.*\..*/.test(data.email)) {
		  errorlist.push('Email must contain at least an @ and a .');
      errorlist.push('Email must not be empty');
		}
	
		// Validate password
		if (!data.password.trim()) {
		  errorlist.push('Password is required');
		} else if (data.password.length < 6) {
		  errorlist.push('Password must be at least 6 characters long');
      errorlist.push('Password must not be empty');
		}
	
		return errorlist;
	  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
    setErrors(validateForm(data));
  };

  const isFormValid = errors.length === 0;
	const isAllFieldsFilled = Object.values(data).every(value => value.trim() !== '');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!isAllFieldsFilled) {
			setErrors(validateForm(data));
			return;
		}

    const userData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post(`${endpoint}/auth/login`, userData);
      console.log("Axios response:", response);
      
      dispatch({ type: 'LOGIN', user: response.data.user });
      Cookies.set("authToken", response.data.authToken);
      onClose();
    } catch (error) {
      // Handle the Axios error here
      console.error("Axios Error:", error);
    }
  };

  const buttonStyleLogin = {
		width: '50%',
    marginLeft: '25%',
    marginTop: '2rem'
	}

  const errorStyle = {
		color: 'red',
		marginLeft: '15%',
	}

  return (
    <>
      <Button variant="primary" onClick={onOpen}>Log in</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='light.gradient'>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input type='email' name='email' placeholder='Email' value={data.email} onChange={handleChange} />
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
              </FormControl>
            </ModalBody>
            {errors.map((error) => (
					<li style={errorStyle}>{error}</li>
					))}
            <Button colorScheme='blue' 
            style={buttonStyleLogin} 
            type='submit' 
            variant={isFormValid && isAllFieldsFilled ? 'confirm' : 'ghost'} 
            disabled={!isFormValid || !isAllFieldsFilled} onClick={handleSubmit}>
              Log in
            </Button>
          </form>
          <Button variant='ghost'>
            Or sign up
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
