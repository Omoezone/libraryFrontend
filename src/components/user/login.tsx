import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
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


export default function Login() {
  const {isOpen, onOpen, onClose } = useDisclosure()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const handleEmailChange = (e) => {
    setEmailValue(e.currentTarget.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordValue(e.currentTarget.value)
  }

  const handleLogin = (e) => {
    console.log(`Form value: ${emailValue} ${passwordValue}`)
    e.preventDefault()
    const data = {
      email: emailValue,
      password: passwordValue
    }
    axios.post('http://localhost:3010/login', data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        alert('Wrong email or password')
        console.log(err)
      })
      
  }

  return (
    <>
      <Button onClick={onOpen}>Log in</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleLogin}>
            <ModalBody>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Email' value={emailValue} onChange={handleEmailChange}/>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder='Password' value={passwordValue} onChange={handlePasswordChange}/>
              </FormControl>
            </ModalBody>
    
            <ModalFooter>
            </ModalFooter>
            <Button colorScheme='blue' mr={3} type='submit' onClick={onClose}>
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
}