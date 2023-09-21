import { IconButton, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import BurgerConetnt from "../filter/burger_content";
import { Image } from "@chakra-ui/react";
import LogoBurger from "../../assets/logo_burger.svg"



const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <IconButton
                aria-label="Open menu"
                icon={<Icon as={HamburgerIcon} />}
                onClick={() => setIsOpen(true)}
                variant="outline"
                colorScheme="teal"
            />

            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg='red.gradient'>
                    <DrawerCloseButton color='white' />
                    <DrawerHeader>
                        <Image src={LogoBurger} />
                    </DrawerHeader>
                    <DrawerBody>
                        <BurgerConetnt />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default BurgerMenu;