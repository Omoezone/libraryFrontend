import { Flex, Image, Icon, Box, VStack, Text } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const footer = () => {

    return (
        <Flex
        align="center"
        justify="center"
        bg="#6F0000" 
        height="200px"   
        bottom="0" 
        left="0" 
        right="0" 
    >   
        <VStack
        spacing={10}
        >
            <VStack
                spacing={10}
            >
                <Box h="1rem" marginBottom="3rem">
                    <Image src="assets/LogoName.svg" w="8rem" h="8rem" />
                </Box>
                <Box h="20px" px="2rem" py="1rem">
                    <Icon as={FaFacebook} fontSize="24px" mr="2" color="gold.solid" />
                    <Icon as={FaTwitter} fontSize="24px" mr="2" color="gold.solid" />
                    <Icon as={FaInstagram} fontSize="24px" mr="2" color="gold.solid" />
                    <Icon as={FaLinkedin} fontSize="24px" color="gold.solid" />
                </Box>
                <Box>
                    <Text fontSize="sm" color="gold.solid" textAlign="center">
                        © 2021 Kea Library Management System. All rights reserved.
                    </Text>
                </Box>
            </VStack>
        </Flex>
    )
}

export default footer