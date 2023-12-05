import { useState } from "react";
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import { useUser } from '../userContext'; 
import axios from 'axios';
import Cookies from "js-cookie";

export default function Userdata() {
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { dispatch } = useUser(); 
  let { user } = useUser(); 

  const userEmail = user ? user.user.email : "Email missing";
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
      let userDataWithToken = {"authToken": Cookies.get("authToken"), "user": userData}
      const response = await axios.post(`http://localhost:3000/user/${user.id}/update`, userDataWithToken);
      console.log("Axios response:", response);
      
      dispatch({ type: 'LOGIN', user: response.data.userData });
      Cookies.set('authToken', response.data.authToken);
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

      <form >
        {(isUpdatingEmail) && (
          <Box>
            <FormLabel fontWeight="bold">Current email: {userEmail || "Email missing"}
              <img src="assets/x-close.svg" style={update_img_style} alt="assets/x-close_svg" onClick={() => { setIsUpdatingEmail(false)}} />
            </FormLabel>
            
              <FormControl id="email" marginTop="0.5rem">
                <FormLabel fontWeight="bold">New email</FormLabel>
                <Input type="email" placeholder="New email" />
                <Button fontWeight="bold" marginTop="2rem" variant="confirm">Save new email</Button>
              </FormControl>
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
              <FormControl id="password">
                <FormLabel fontWeight="bold">New password</FormLabel>
                <Input type='password' name='new_password' placeholder='New password' value={data.new_password} onChange={handleChange} />
                <FormLabel fontWeight="bold">Confirm new password</FormLabel>
                <Input type="password" placeholder="New password" />
                <Button fontWeight="bold" onClick={handleSubmit} variant="confirm" marginTop="2rem">Save new password</Button>
              </FormControl>
            </Box>
          </Box>
        )}
      </form>
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
