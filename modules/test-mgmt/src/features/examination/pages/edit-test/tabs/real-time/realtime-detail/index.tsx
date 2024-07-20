import { Avatar, Box, HStack, Icon, IconButton, Text, Tooltip } from '@chakra-ui/react';
import { AutoGrid, EBreakpoint } from 'react-grid-container-query';
import { HiChevronLeft, HiOutlineLightningBolt } from 'react-icons/hi';

import RealtimeQuestionItem from './realtime-question-item';

const RealtimeDetail = () => {
  return (
    <Box>
      <Box flex={1} alignItems="flex-start">
        <HStack>
          <Tooltip label="Realtime Listing" aria-label="A tooltip">
            <IconButton
              aria-label="Back"
              icon={<Icon as={HiChevronLeft} w={6} h={6} />}
              size="sm"
              color="gray.500"
              bg="transparent"
              _focus={{}}
            />
          </Tooltip>
          <Avatar size="xs" />
          <Text fontSize="lg" fontWeight="500">
            An Nguyen Q.
          </Text>
          <Text fontSize="sm" color="gray.500">
            @ngquangan
          </Text>
          <Box w={2} />
          <Icon as={HiOutlineLightningBolt} color="green.500" />
          <Text color="green.500" fontWeight="400" fontSize="sm">
            Tracking in 00:10:15
          </Text>
        </HStack>
      </Box>
      <Box pt={4}>
        <AutoGrid gap={EBreakpoint.sm}>
          <RealtimeQuestionItem status="opened" />
          <RealtimeQuestionItem status="opened" />
          <RealtimeQuestionItem status="opened" />
          <RealtimeQuestionItem status="opened" />
          <RealtimeQuestionItem status="opened" />
          <RealtimeQuestionItem status="current" />
          <RealtimeQuestionItem status="normal" />
          <RealtimeQuestionItem status="normal" />
        </AutoGrid>
      </Box>
    </Box>
  );
};

export default RealtimeDetail;
