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
        
        // Set the user state (data) in the userContext
        dispatch({ type: 'LOGIN', user: response.data });
        // Set the user cookie. JWT encrypted
        Cookies.set("authToken", response.data.authToken);
        onClose();
      } catch (error) {
        // Handle the Axios error here
        console.error("Axios Error:", error);
      }
    };

    return (
      <>
        <ModalHeader fontWeight="bold">Your info</ModalHeader>
        <ModalCloseButton />
        <ModalBody scrollBehavior={scrollBehavior}>
            <div>
              <FormLabel fontWeight="bold">Email</FormLabel>
            {!isUpdatingEmail ? (
              <FormLabel>{userEmail || "Email missing"}
                <img src="assets/write.svg" style={update_img_style} alt="assets/write_svg" onClick={(e) => { setIsUpdatingEmail(true)} } />
              </FormLabel>
            ) : (
              <>
                <FormLabel fontWeight="bold">Current email:{userEmail || "Email missing"}
                  <img src="assets/x-close.svg" style={update_img_style} alt="assets/x-close_svg" onClick={(e) => { setIsUpdatingEmail(false)}} />
                </FormLabel>
                <form>
                  <FormControl id="email">
                    <FormLabel fontWeight="bold">New email</FormLabel>
                    <Input type="email" placeholder="New email" />
                    <Button fontWeight="bold">Save new email</Button>
                  </FormControl>
                </form>
              </>
            )}  
            </div>
            <div>
              <FormLabel fontWeight="bold">Password</FormLabel>
            {!isUpdatingPassword ? (
              <FormLabel>{userPassword || "Password missing"}
                <img src="assets/write.svg" style={update_img_style} alt="assets/write_svg" onClick={(e) => {e.preventDefault; setIsUpdatingPassword(true)} } />
              </FormLabel>
            ) : (
              <>
                <FormLabel fontWeight="bold">Current password: {userPassword || "Password missing"}
                  <img src="assets/x-close.svg" style={update_img_style} alt="assets/x-close_svg" onClick={(e) => {e.preventDefault; setIsUpdatingPassword(false)}} />
                </FormLabel>
                <form>
                  <FormControl id="password">
                    <FormLabel fontWeight="bold">Current password</FormLabel>
                    <Input type='password' name='password' placeholder='Old password' value={data.password} onChange={handleChange} />
                    <FormLabel fontWeight="bold">New password</FormLabel>
                    <Input type='password' name='new_password' placeholder='New password' value={data.new_password} onChange={handleChange} />
                    <FormLabel fontWeight="bold">Confirm new password</FormLabel>
                    <Input type="password" placeholder="New password" />
                    <Button fontWeight="bold" onClick={handleSubmit}>Save new password</Button>
                  </FormControl>
                </form>
              </>
            )}  
            </div>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Log out
          </Button>
          
          <Button variant='ghost'>
            Delete user
          </Button>
        </ModalFooter>
      </>
    )
  }