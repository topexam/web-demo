import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useIdFromSlug } from '@topexam/web.lib.util';

import { useSubmissionItem } from '@/features/submission/data';
import { useExaminationItem } from '@/features/examination/data';

import { HeaderBox } from './header-box';
import { QuestionsBox } from './questions-box';
import ExaminationDoingShimmer from './shimmer';
import { SidebarBox } from './sidebar-box';

export const ExaminationTakingPage = () => {
  const submissionId = useIdFromSlug();

  const submissionItemQuery = useSubmissionItem({
    submissionId: submissionId,
  });

  const examinationItemQuery = useExaminationItem({
    examinationId: submissionItemQuery.data?.examination_id || null,
  });
  if (submissionItemQuery.isLoading || examinationItemQuery.isLoading) {
    return <ExaminationDoingShimmer />;
  }

  const examinationItem = examinationItemQuery.data || null;
  return (
    <Container maxWidth="100%" px={0}>
      <Grid templateColumns="auto 1fr" templateRows="auto 1fr" columnGap={4} rowGap={4}>
        <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={2}>
          <HeaderBox examination={examinationItem} />
        </GridItem>
        <GridItem colStart={1} colEnd={2} rowStart={2} rowEnd={3} ml={4} position="sticky">
          <SidebarBox examination={examinationItem} />
        </GridItem>
        <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3} pb={4}>
          <QuestionsBox examination={examinationItem} />
        </GridItem>
      </Grid>
    </Container>
  );
};
