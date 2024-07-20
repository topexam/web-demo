import {
  Icon,
  Box,
  Text,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import { HiOutlineDocumentAdd } from 'react-icons/hi';

import FormContent from './form-content';

export const CreateTest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center
        flexDir="column"
        minHeight="200px"
        borderWidth={1}
        borderStyle="dashed"
        borderColor="gray.300"
        rounded="md"
        p={4}
        bg="gray.50"
        color="gray.500"
        _hover={{ cursor: 'pointer', bg: 'gray.200' }}
        onClick={onOpen}
      >
        <Icon as={HiOutlineDocumentAdd} boxSize={12} />
        <Box ml={3}>
          <Text fontWeight="500" fontSize="lg" color="gray.500">
            Create a new examination
          </Text>
        </Box>
      </Center>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Create Examination</DrawerHeader>
            <FormContent onClose={onClose} />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
