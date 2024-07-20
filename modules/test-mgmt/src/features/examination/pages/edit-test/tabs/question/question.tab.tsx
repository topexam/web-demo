import { Box, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { EExaminationMode } from '@topexam/web.lib.foundation';

import { useExaminationItem } from '@/features/examination/api';
import { IPageRouteParams } from '@/types';
import { NormalAnswerBox } from './normal-answer-box';
import { NormalContentBox } from './normal-content-box';
import { PDFContentBox } from './pdf-content-box';
import { PDFAnswerBox } from './pdf-answer-box';
import { SectionHeader } from './section-header';

export const QuestionTab = () => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;
  const examinationItemQuery = useExaminationItem({
    examinationId,
  });

  const isPDFMode = examinationItemQuery?.data?.mode === EExaminationMode.PDF;
  return (
    <Box p={4}>
      <SectionHeader />
      <Stack mt={4} spacing={4} w="full" align="start" direction={{ base: 'column', lg: 'row' }}>
        {isPDFMode ? <PDFContentBox /> : <NormalContentBox />}
        {isPDFMode ? <PDFAnswerBox /> : <NormalAnswerBox />}
      </Stack>
    </Box>
  );
};
