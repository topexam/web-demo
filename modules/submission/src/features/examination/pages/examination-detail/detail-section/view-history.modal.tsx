import {
  Button,
  useDisclosure,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
  Text,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { AiOutlineHistory } from 'react-icons/ai';
import { HiOutlineClipboardCheck, HiOutlineClock } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { format, differenceInSeconds } from 'date-fns';
import { useIdFromSlug } from '@topexam/web.lib.util';

import { useSubmissionListByUser } from '@/features/submission/data';

export const ViewHistoryModal = () => {
  const examinationId = useIdFromSlug();
  const submissionListQuery = useSubmissionListByUser({
    examinationId,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const _renderSubmissionList = () => {
    return submissionListQuery.data?.map((item) => {
      const submissionContent = () => {
        const totalSeconds = differenceInSeconds(
          new Date(item?.time_end || new Date()),
          new Date(item?.time_start)
        );
        const second = totalSeconds % 60;
        const minute = (totalSeconds - second) / 60;

        return (
          <Box py={2} key={item._id}>
            <Text
              fontWeight="500"
              color="blue.500"
              _hover={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              {item.time_end
                ? `Submitted on ${format(new Date(item.time_end), 'dd/MM/yyyy HH:mm:ss')}`
                : 'Taking...'}
            </Text>
            <HStack mt={1}>
              <Tag colorScheme="green">
                <TagLeftIcon as={HiOutlineClipboardCheck} />
                <TagLabel>
                  {item.result || 0}/{item?.question_num || 0}
                </TagLabel>
              </Tag>
              <Tag colorScheme="blue">
                <TagLeftIcon as={HiOutlineClock} />
                <TagLabel>
                  {`${minute}`.padStart(2, '0')}m{`${second}`.padStart(2, '0')}s
                </TagLabel>
              </Tag>
            </HStack>
          </Box>
        );
      };

      if (item.view_answer) {
        return (
          <Link to={`/examination/${item._id}/history`} key={item._id}>
            {submissionContent()}
          </Link>
        );
      }

      return submissionContent();
    });
  };

  if (submissionListQuery.isLoading) {
    return <Button isLoading colorScheme="red" />;
  }

  if (!submissionListQuery.data?.length) {
    return null;
  }

  return (
    <>
      <Button
        colorScheme="red"
        variant="ghost"
        leftIcon={<Icon as={AiOutlineHistory} w={5} h={5} />}
        _focus={{}}
        mr={2}
        onClick={onOpen}
      >
        History
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Examination History</ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody>{_renderSubmissionList()}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
