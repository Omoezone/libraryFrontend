import { Flex, Icon } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const footer = () => {
    return (
        <Flex
        align="center"
        justify="center"
        bg="#6F0000" 
        height="200px" 
        position="fixed" 
        bottom="0" 
        left="0" 
        right="0" 
        
    >
        <Icon as={FaFacebook} fontSize="24px" mr="2" color="blue.500" />
        <Icon as={FaTwitter} fontSize="24px" mr="2" color="blue.400" />
        <Icon as={FaInstagram} fontSize="24px" mr="2" color="pink.500" />
        <Icon as={FaLinkedin} fontSize="24px" color="blue.800" />
    </Flex>
    )
}

export default footer