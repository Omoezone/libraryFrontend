import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
    Image,
    useDisclosure,
  } from '@chakra-ui/react'

import Theme from '../../../theme';
import Userdata from './userdata';
import Userborrowed from './userborrowed';
import UserReviews from "./userreviews";
import UserBookmarked from "./userbookmarks";

export default function usertab() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeTab, setActiveTab] = useState("userinfo");

    const avatar_img_style = {
        width: '3rem',
        cursor: 'pointer'
    }

    const button_row_style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const handleTabChange = (e:any) => {
        const { name } = e.target;
        setActiveTab(name);
    };

    return (
        <>
            <Image src="assets/userLogo.svg" style={avatar_img_style} onClick={onOpen} />
            <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg='light.gradient'>
                <br /> <br />
                <div style={button_row_style}>
                    <Button onClick={handleTabChange} name='bookmarks'>Bookmarks</Button>
                    <Button onClick={handleTabChange} name='borrowed'>Borrowed <br />books</Button>
                    <Button onClick={handleTabChange} name='authors'>Favorited <br />authors</Button>
                    <Button onClick={handleTabChange} name='reviews'>Reviews</Button>
                    <Button onClick={handleTabChange} name='userinfo'>User info</Button>
                </div>
                <div>
                    {activeTab === 'bookmarks' ?
                        <UserBookmarked/>
                    : activeTab === 'borrowed' ? 
                        <Userborrowed />
                    : activeTab === 'authors' ? 
                        <div>Tab content3</div>
                    : activeTab === 'reviews' ?
                        <UserReviews />
                    : activeTab === 'userinfo' ?
                        <Userdata />
                    : null}
                </div>
            </ModalContent>
            </Modal>
        </>
    )
}