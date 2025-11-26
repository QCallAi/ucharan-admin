import React, { useRef } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
const DeleteModal = ({ isOpen, handleClose, setIsConfirm }: any) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <Modal
      isCentered
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <ModalOverlay />
      <ModalContent className="dark:bg-navy-900">
        <ModalCloseButton />
        <ModalBody pb={6}>
          <div className="mt-6 flex flex-col items-center justify-center">
            <svg
              className="mx-auto mb-3.5 h-11 w-11 text-red-500 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="mb-4">Are you sure you want to delete this item?</p>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => setIsConfirm(true)} colorScheme="blue" mr={3}>
            Yes
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
