import { Flex, Box, Text } from '@chakra-ui/react';
import { IExamination } from '@topexam/web.lib.foundation';

import SubmitExaminationDialog from './submit-examination.dialog';

type Props = {
  examination: IExamination | null;
};

export const HeaderBox = ({ examination }: Props) => {
  return (
    <Flex align="center" height="64px" px={4} shadow="base" bg="white">
      <Box flex={1} mr={2}>
        <Text fontWeight="500" fontSize="lg">
          {examination?.title || '___'}
        </Text>
      </Box>
      <SubmitExaminationDialog />
    </Flex>
  );
};
