import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useDisclosure,
  Icon,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { HiOutlinePlay } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useIdFromSlug } from '@topexam/web.lib.util';
import { useRef } from 'react';

import { useTakeExamination } from '@/features/examination/data';

export const PlayTestDialog = () => {
  const examinationId = useIdFromSlug();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();
  const toast = useToast();
  const navigate = useNavigate();

  const takeExaminationMutation = useTakeExamination();

  const _handleTakeExamination = () => {
    takeExaminationMutation.mutate(
      { examinationId },
      {
        onSuccess: (resData) => {
          const submissionId = resData.id;
          onClose();
          navigate(`/${submissionId}/doing`);
        },
        onError: (error) => {
          toast({
            title: 'Take Examination Failure!',
            description: (error as any).toString(),
            status: 'error',
            duration: 3000,
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
        leftIcon={<Icon as={HiOutlinePlay} w={5} h={5} />}
        _focus={{}}
        onClick={onOpen}
      >
        Take a test
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Accept Terms</AlertDialogHeader>
          <AlertDialogCloseButton _focus={{}} />
          <AlertDialogBody>
            Click <strong>Start</strong> to accept terms and start to take a test.
          </AlertDialogBody>
          <AlertDialogFooter>
            <HStack spacing={3}>
              <Button onClick={onClose} colorScheme="red" variant="ghost" _focus={{}} size="sm">
                Back
              </Button>
              <Button
                colorScheme="blue"
                size="sm"
                leftIcon={<Icon as={HiOutlinePlay} />}
                loadingText="Requesting"
                isLoading={takeExaminationMutation.isPending}
                onClick={_handleTakeExamination}
              >
                Start
              </Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
