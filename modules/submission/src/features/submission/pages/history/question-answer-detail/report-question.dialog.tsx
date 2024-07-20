import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  Icon,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { HiOutlineExclamation } from 'react-icons/hi';

const ReportQuestionDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  return (
    <>
      <Button
        leftIcon={<Icon as={HiOutlineExclamation} w={5} h={5} />}
        variant="ghost"
        _focus={{}}
        colorScheme="orange"
        onClick={onOpen}
      >
        Report
      </Button>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} size="lg">
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Report Question
            </AlertDialogHeader>
            <AlertDialogBody>
              <FormControl id="content">
                <Textarea placeholder="Enter your opinion" />
              </FormControl>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                colorScheme="red"
                variant="ghost"
                _focus={{}}
              >
                Cancel
              </Button>
              <Button colorScheme="blue" ml={3} _focus={{}}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ReportQuestionDialog;
