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
  } from '@chakra-ui/react'
  import { useUser } from '../user/userContext';  

  export default function Userpage() {
    const [isUpdatingEmail, setIsUpdatingEmail] = useState(false)
    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const update_img_style = {
      width: '1.25rem',
      float: 'right',
      cursor: 'pointer'
    }

    const avatar_img_style = {
      width: '3rem',
      cursor: 'pointer'
    }
    let { user } = useUser(); 
    console.log("user", user)
    let userEmail;
    let userPassword;
    if(user) {
      userEmail = (user && user.email) || "Email missing";
      userPassword = (user && user.pass) || "Password missing";
    }else{
      userEmail = "Email missing";
      userPassword = "Password missing";
    }
    
    return (
      <>
        <Image src="assets/userLogo.svg" style={avatar_img_style} onClick={onOpen} />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontWeight="bold">My page</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
                    <FormControl id="email">
                      <FormLabel fontWeight="bold">New email</FormLabel>
                      <Input type="email" placeholder="New email" />
                      <Button fontWeight="bold">Save new email</Button>
                    </FormControl>
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
                    <FormControl>
                      <FormLabel fontWeight="bold">New Password</FormLabel>
                      <Input type="password" placeholder="New password" />
                      <FormLabel fontWeight="bold">Confirm new Password</FormLabel>
                      <Input type="password" placeholder="Confirm new password" />
                      <Button fontWeight="bold">Save new Password</Button>
                    </FormControl>
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
          </ModalContent>
        </Modal>
      </>
    )
  }