import { Box } from '@chakra-ui/react';
import { EExaminationMode, IExamination } from '@topexam/web.lib.foundation';

import RemainingTime from './remaining-time';
import NormalAnswersSheet from './normal-answers-sheet';
import PDFAnswersSheet from './pdf-answers-sheet';

type Props = {
  examination: IExamination | null;
};

export const SidebarBox = ({ examination }: Props) => {
  const _renderAnswersSheet = () => {
    if (examination?.mode === EExaminationMode.NORMAL) {
      return <NormalAnswersSheet />;
    }
    if (examination?.mode === EExaminationMode.PDF) {
      return <PDFAnswersSheet />;
    }

    return null;
  };

  return (
    <Box borderWidth={1} rounded="md" p={4} width={{ base: '100%', md: '300px' }} bg="white">
      <RemainingTime time={examination?.time || 0} />
      {_renderAnswersSheet()}
    </Box>
  );
};
