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


export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Log in</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Email' />
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='Password' />
            </FormControl>
          </ModalBody>
  
          <ModalFooter>
            <Center>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Log in
              </Button>
              <Button variant='ghost'>
                Or sign up
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}