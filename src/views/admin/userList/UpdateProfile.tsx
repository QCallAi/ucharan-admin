import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

interface UpdateProfileProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({ onOpen, onClose, isOpen }) => {
  return (
    <div>
      <h1>pravin</h1>
    
    </div>
  );
}

export default UpdateProfile;
