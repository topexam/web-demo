import { HStack, Icon, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { HiClipboardCheck, HiOutlineClock, HiOutlineMinus } from 'react-icons/hi';
import { differenceInSeconds } from 'date-fns';

import { currentSubmissionAtom } from '@/features/submission/states';

const RemainingTime = () => {
  const currentSubmissionData = useRecoilValue(currentSubmissionAtom);

  const score = currentSubmissionData?.result || 0;
  const totalQuestion = currentSubmissionData?.answers?.length || 0;

  const totalSeconds = differenceInSeconds(
    new Date(currentSubmissionData?.time_end || ''),
    new Date(currentSubmissionData?.time_start || '')
  );
  const second = totalSeconds % 60;
  const minute = (totalSeconds - second) / 60;

  return (
    <HStack bg="blue.50" p={2} borderRadius="md" justify="center">
      <HStack spacing={1}>
        <Icon as={HiOutlineClock} color="blue.500" w={5} h={5} />
        <Text fontWeight="700" color="blue.500" fontSize="lg">
          {`${minute}`.padStart(2, '0')}:{`${second}`.padStart(2, '0')}
        </Text>
      </HStack>
      <Icon as={HiOutlineMinus} />
      <HStack spacing={1}>
        <Icon as={HiClipboardCheck} color="green.500" w={5} h={5} />
        <Text fontWeight="700" color="green.500" fontSize="lg">
          {score}/{totalQuestion}
        </Text>
      </HStack>
    </HStack>
  );
};

export default RemainingTime;
