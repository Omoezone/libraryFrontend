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

    return (
      <>
        <Image src="assets/userLogo.svg" style={avatar_img_style} onClick={onOpen} />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>My page</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div>
                  <FormLabel>Email</FormLabel>
                {!isUpdatingEmail ? (
                  <FormLabel>__sampleemail@stud.kea.dk__
                    <img src="assets/write.svg" style={update_img_style} alt="assets/write_svg" onClick={(e) => {e.preventDefault; setIsUpdatingEmail(true)} } />
                  </FormLabel>
                ) : (
                  <>
                    <FormLabel>Current email: __sampleemail@stud.kea.dk__
                      <img src="assets/x-close.svg" style={update_img_style} alt="assets/x-close_svg" onClick={(e) => {e.preventDefault; setIsUpdatingEmail(false)}} />
                    </FormLabel>
                    <FormControl id="email">
                      <FormLabel>New email</FormLabel>
                      <Input type="email" placeholder="New email" />
                      <Button>Save new email</Button>
                    </FormControl>
                  </>
                )}  
                </div>
                <div>
                  <FormLabel>Password</FormLabel>
                {!isUpdatingPassword ? (
                  <FormLabel>*********
                    <img src="assets/write.svg" style={update_img_style} alt="assets/write_svg" onClick={(e) => {e.preventDefault; setIsUpdatingPassword(true)} } />
                  </FormLabel>
                ) : (
                  <>
                    <FormLabel>Current password: __*******rd__
                      <img src="assets/x-close.svg" style={update_img_style} alt="assets/x-close_svg" onClick={(e) => {e.preventDefault; setIsUpdatingPassword(false)}} />
                    </FormLabel>
                    <FormControl>
                      <FormLabel>New Password</FormLabel>
                      <Input type="password" placeholder="New password" />
                      <FormLabel>Confirm new Password</FormLabel>
                      <Input type="password" placeholder="Confirm new password" />
                      <Button>Save new Password</Button>
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