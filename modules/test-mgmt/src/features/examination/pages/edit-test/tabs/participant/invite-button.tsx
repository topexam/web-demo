import {
  Box,
  Button,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { HiOutlineUserAdd } from 'react-icons/hi';

const InviteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<Icon as={HiOutlineUserAdd} />}
        size="sm"
        colorScheme="blue"
      >
        Invite user
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input placeholder="Enter username or email" />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue">Invite</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InviteButton;
