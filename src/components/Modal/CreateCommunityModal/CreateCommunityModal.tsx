import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};
const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          flexDirection="column"
          fontSize={15}
          padding={3}
        >
          Create a community
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>Text</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button variant="ghost">Create Community</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateCommunityModal;
