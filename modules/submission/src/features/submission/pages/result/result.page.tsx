import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Text,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { useIdFromSlug } from '@topexam/web.lib.util';

import ReviewDialog from './review.dialog';
import SeeAnswerDialog from './see-answer.dialog';
import { useSubmissionItem } from '../../data';

export const ExaminationResultPage = () => {
  const submissionId = useIdFromSlug();

  const submissionItemQuery = useSubmissionItem({ submissionId: submissionId });
  const submissionItemData = submissionItemQuery.data;

  if (submissionItemQuery.isLoading) {
    return (
      <Container maxW="1400px" py={4}>
        <Center flexDir="column">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
          <Text color="gray.400">Fetching examination result...</Text>
        </Center>
      </Container>
    );
  }

  const examinationResult = submissionItemData?.result || 0;
  const examinationTotalQuestion = submissionItemData?.question_num || 0;
  return (
    <Container maxW="1400px" minH="100vh" py={4}>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p={10}
        borderRadius="md"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="xl" fontWeight="600">
          Examination submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          <Text>Thanks for submitting your examination.</Text>
          <Text fontWeight="500" fontSize="lg" mt={10}>
            Your Result
          </Text>
          <CircularProgress
            value={((examinationResult || 0) * 100) / examinationTotalQuestion}
            color="green.400"
            size="200px"
            mt={3}
          >
            <CircularProgressLabel fontSize="32px" color="green.500" fontWeight="500">
              {examinationResult}/{examinationTotalQuestion}
            </CircularProgressLabel>
          </CircularProgress>
          <Flex mt={6}>
            <SeeAnswerDialog
              examinationId={submissionItemData?.examination_id || ''}
              submissionId={submissionItemData?._id || ''}
            />
            <ReviewDialog examinationId={submissionItemData?.examination_id || ''} />
          </Flex>
        </AlertDescription>
      </Alert>
    </Container>
  );
};
