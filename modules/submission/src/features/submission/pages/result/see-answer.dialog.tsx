import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import { useRequestViewAnswer } from '../../data';

type Props = {
  examinationId: string;
  submissionId: string;
};

const SeeAnswerDialog = ({ examinationId, submissionId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();
  const navigate = useNavigate();

  const requestViewAnswerMutation = useRequestViewAnswer();

  const _handleRequestViewAnswer = () => {
    requestViewAnswerMutation.mutate(
      { examinationId },
      {
        onSuccess: () => {
          navigate(`/examination/${submissionId}/history`);
        },
      }
    );
  };

  return (
    <>
      <Button
        mr={3}
        colorScheme="orange"
        leftIcon={<Icon as={HiOutlineClipboardList} w={5} h={5} />}
        _focus={{}}
        onClick={onOpen}
      >
        See answer
      </Button>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm See The Answer
            </AlertDialogHeader>
            <AlertDialogBody>
              If you want to see the answers, you can not take this test again! Are you sure?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                mr={3}
                _focus={{}}
                colorScheme="red"
                variant="ghost"
              >
                Back
              </Button>
              <Button
                colorScheme="blue"
                _focus={{}}
                onClick={_handleRequestViewAnswer}
                isLoading={requestViewAnswerMutation.isPending}
              >
                I'm sure
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default SeeAnswerDialog;
