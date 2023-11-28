import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  LightMode,
  Box,
} from '@chakra-ui/react'
import Theme from '../../../theme';
import { useUser } from '../userContext'; 
import axios from 'axios';
import Cookies from 'js-cookie'; 

export default function Userdata() {
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { dispatch } = useUser(); 
  let { user } = useUser(); 

  const userEmail = user ? user.user.email : "Email missing";
  const userPassword = user ? user.user.pass : "Password missing";
  const scrollBehavior = 'inside';

  const update_img_style = {
    width: '1.25rem',
    float: 'right',
    cursor: 'pointer'
  }

  const avatar_img_style = {
    width: '3rem',
    cursor: 'pointer'
  }

  const [data, setData] = useState({
    email: "",
    password: "",
    new_password: ""
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
      new_password: data.new_password
    };

    try {
      const response = await axios.post(`http://localhost:3000/user/${user.id}`, userData);
      console.log("Axios response:", response);
      
      dispatch({ type: 'LOGIN', user: response.data });
      Cookies.set("authToken", response.data.authToken);
      onClose();
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  return (
    <>
      <ModalHeader fontWeight="bold">Your info</ModalHeader>
      <ModalCloseButton />
      <ModalBody scrollBehavior={scrollBehavior}>
        {(!isUpdatingEmail && !isUpdatingPassword) && (
          <Box>
            <FormLabel fontWeight="bold">Email</FormLabel>
            <FormLabel>{userEmail || "Email missing"}
              <img src="assets/write.svg" style={update_img_style} alt="assets/write_svg" onClick={() => { setIsUpdatingEmail(true)} } />
            </FormLabel>
          </Box>
        )}

        {(isUpdatingEmail) && (
          <Box>
            <FormLabel fontWeight="bold">Current email: {userEmail || "Email missing"}
              <img src="assets/x-close.svg" style={update_img_style} alt="assets/x-close_svg" onClick={() => { setIsUpdatingEmail(false)}} />
            </FormLabel>
            <form>
              <FormControl id="email" marginTop="0.5rem">
                <FormLabel fontWeight="bold">New email</FormLabel>
                <Input type="email" placeholder="New email" />
                <Button fontWeight="bold" marginTop="2rem" variant="confirm">Save new email</Button>
              </FormControl>
            </form>
          </Box>
        )}

        {(!isUpdatingEmail && !isUpdatingPassword) && (
          <Box>
            <FormLabel fontWeight="bold">Password</FormLabel>
            <FormLabel>{"********" || "Password missing"}
              <img src="assets/write.svg" style={update_img_style} alt="assets/write_svg" onClick={() => {setIsUpdatingPassword(true)} } />
            </FormLabel>
          </Box>
        )}

        {(isUpdatingPassword) && (
          <Box>
            <FormLabel fontWeight="bold">Current password: {"********" || "Password missing"}
              <img src="assets/x-close.svg" style={update_img_style} alt="assets/x-close_svg" onClick={() => {setIsUpdatingPassword(false)}} />
            </FormLabel>
            <Box marginTop="2rem">
              <form>
                <FormControl id="password">
                  <FormLabel fontWeight="bold">New password</FormLabel>
                  <Input type='password' name='new_password' placeholder='New password' value={data.new_password} onChange={handleChange} />
                  <FormLabel fontWeight="bold">Confirm new password</FormLabel>
                  <Input type="password" placeholder="New password" />
                  <Button fontWeight="bold" onClick={handleSubmit} variant="confirm" marginTop="2rem">Save new password</Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        )}
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" mr={3} onClick={onClose}>
          Log out
        </Button>
        <Button variant='ghost'>
          Delete user
        </Button>
      </ModalFooter>
    </>
  )
}
