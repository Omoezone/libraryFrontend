import { IconButton, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import BurgerConetnt from "../filter/burger_menu_filter";
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
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filter</DrawerHeader>
                    <DrawerBody>
                        <BurgerConetnt />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default BurgerMenu;