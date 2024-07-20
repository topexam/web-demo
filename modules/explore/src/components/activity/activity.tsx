import { Box, Divider, Heading } from '@chakra-ui/react';
import { ActivityItemFull } from './activity-item';

export const ActivitySection = () => {
  return (
    <Box>
      <Heading as="h4" size="md">
        Activity
      </Heading>
      <Divider py="5px" />
      <Box mt={4}>
        <ActivityItemFull />
        <ActivityItemFull />
        <ActivityItemFull />
        <ActivityItemFull />
        <ActivityItemFull />
        <ActivityItemFull />
      </Box>
    </Box>
  );
};
