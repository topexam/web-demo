import { Box } from '@chakra-ui/react';
import AnswersSheet from './answers-sheet';
import RemainingTime from './remaining-time';

export const SideBarBox = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} width={{ base: '100%', md: '400px' }}>
      <RemainingTime />
      <AnswersSheet />
    </Box>
  );
};
