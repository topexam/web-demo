import { Center, Container, Grid, GridItem, Spinner, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useIdFromSlug } from '@topexam/web.lib.util';

import { useExaminationItem } from '@/features/examination';
import { useSubmissionItem, currentSubmissionAtom } from '@/features/submission';

import HeaderBox from './header-box';
import { SideBarBox } from './sidebar-box';
import QuestionGroupList from './question-group-list';

export const SubmissionHistoryPage = () => {
  const submissionId = useIdFromSlug();

  const submissionItemQuery = useSubmissionItem({ submissionId: submissionId });
  const examinationItemQuery = useExaminationItem({
    examinationId: submissionItemQuery.data?.examination_id || null,
  });

  const setCurrentSubmission = useSetRecoilState(currentSubmissionAtom);

  useEffect(() => {
    if (examinationItemQuery.data && submissionItemQuery.data) {
      setCurrentSubmission({
        ...examinationItemQuery.data,
        ...submissionItemQuery.data,
      });
    }
  }, [examinationItemQuery.data, submissionItemQuery.data, setCurrentSubmission]);

  if (examinationItemQuery.isLoading || submissionItemQuery.isLoading) {
    return (
      <Center mt={4} flexDir="column">
        <Spinner color="green.500" size="lg" />
        <Text color="gray.400" mt={2}>
          Fetching Result...
        </Text>
      </Center>
    );
  }

  return (
    <Container maxWidth="100%" px={0} pb={4}>
      <Grid templateColumns="auto 1fr" templateRows="auto 1fr" columnGap={4} rowGap={4}>
        <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={2}>
          <HeaderBox />
        </GridItem>
        <GridItem colStart={1} colEnd={2} rowStart={2} rowEnd={3} ml={4} position="sticky">
          <SideBarBox />
        </GridItem>
        <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
          <QuestionGroupList />
        </GridItem>
      </Grid>
    </Container>
  );
};
