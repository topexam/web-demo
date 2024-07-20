import {
  Flex,
  Icon,
  Text,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { RiLayoutLeft2Fill } from 'react-icons/ri';
import { IQuestion } from '@topexam/web.lib.foundation';

import FormContent from './form-content';

type Props = {
  prevQuestion?: IQuestion | null;
  nextQuestion?: IQuestion | null;
};

export const CreateQuestionBox = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        borderWidth="1px"
        borderStyle="dashed"
        borderColor="green.300"
        borderRadius="md"
        py={3}
        px={4}
        bg="green.50"
        _hover={{ cursor: 'pointer', bg: 'green.100' }}
        flexDirection="column"
        align="center"
        justify="center"
        minHeight="150px"
        onClick={onOpen}
        color="green.400"
      >
        <Icon as={RiLayoutLeft2Fill} boxSize={6} />
        <Text fontWeight="500" fontSize="lg">
          Create new question
        </Text>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Question Type</ModalHeader>
          <ModalCloseButton _focus={{}} />
          <FormContent
            prevQuestion={props.prevQuestion}
            nextQuestion={props.nextQuestion}
            onClose={onClose}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
