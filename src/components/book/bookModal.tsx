import { Modal, ModalOverlay,ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export const BookModal = ({ book, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{book.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{book.summary}</p>
          <p>{book.available_amount}</p>
          <button onClick={onClose}>Close</button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
