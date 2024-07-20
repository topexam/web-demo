import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { RiListCheck2 } from 'react-icons/ri';
import ContentBox from './content-box';

export const ManageAnswerBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        size="xs"
        leftIcon={<Icon as={RiListCheck2} boxSize={4} />}
        colorScheme="blue"
        variant="ghost"
        onClick={onOpen}
      >
        Manage
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth={1}>Manage Answer Sheets</DrawerHeader>
            <ContentBox onClose={onClose} />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
