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
import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid';

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

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
      email: data.email,
      password: data.password
    };
    try {
      const response = await axios.post("http://localhost:3000/login", userData);
      console.log("Axios response:", response);
      Cookies.set('userCookie', uuidv4() /*, { expires: 7 }*/);
      // Handle successful response here
    } catch (error) {
      // Handle the Axios error here
      console.error("Axios Error:", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Log in</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
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

            <Button colorScheme='blue' type='submit' onClick={handleSubmit}>
              Log in  
            </Button>
          </form>
          <Button variant='ghost'>
            Or sign up
          </Button>
        </ModalContent>
      </Modal>
    </>
  )
};

export default Login;