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
  Text,
  Alert,
  AlertIcon,
  useToast,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useIdFromSlug } from '@topexam/web.lib.util';

import { useSubmitExaminationResult } from '@/features/submission';
import { questionAnswerListAtom, questionUnAnswerNumSelector } from '../../../states';

const SubmitExaminationDialog = () => {
  const submissionId = useIdFromSlug();

  const questionAnswerList = useRecoilValue(questionAnswerListAtom);
  const questionUnAnswerNum = useRecoilValue(questionUnAnswerNumSelector);
  const submitExaminationResultMutation = useSubmitExaminationResult();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  const cancelRef = React.useRef<any>();

  const _handleSubmitExaminationResult = () => {
    if (questionUnAnswerNum) {
      onOpen();
      return;
    }

    _submitExaminationResult();
  };

  const _submitExaminationResult = () => {
    submitExaminationResultMutation.mutate(
      {
        submissionId: submissionId,
        payload: {
          user_answers: questionAnswerList.map((it) => ({
            options: it.selections,
            question: it._id,
          })),
        },
      },
      {
        onSuccess: () => {
          toast({
            title: 'Request successfully sent!',
            description: 'Congratulations, your test has been recorded.',
            status: 'success',
            isClosable: true,
            position: 'bottom-left',
          });
          onClose();
          navigate(`/examination/${submissionId}/result`);
        },
        onError: () => {
          toast({
            title: 'Request failure!',
            description: 'Oh! no, something was wrong. Try again!',
            status: 'error',
            isClosable: true,
            position: 'bottom-left',
          });
        },
      }
    );
  };

  return (
    <>
      <Button
        colorScheme="blue"
        leftIcon={<Icon as={FiSend} w={5} h={5} />}
        onClick={_handleSubmitExaminationResult}
        _focus={{}}
      >
        Submit
      </Button>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Submit Examination
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>Are you sure submit examination?</Text>
              <Alert status="warning" mt={2}>
                <AlertIcon />
                You are having {questionUnAnswerNum} unanswered questions!
              </Alert>
            </AlertDialogBody>

            <AlertDialogFooter>
              <HStack spacing={3}>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  colorScheme="red"
                  variant="ghost"
                  size="sm"
                >
                  Back
                </Button>
                <Button
                  colorScheme="green"
                  onClick={_submitExaminationResult}
                  isLoading={submitExaminationResultMutation.isPending}
                  loadingText="Submitting"
                  size="sm"
                >
                  Submit
                </Button>
              </HStack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default SubmitExaminationDialog;
