import { Flex, Box, Text, Button, Icon } from '@chakra-ui/react';
import { FaFlagCheckered } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { currentSubmissionAtom } from '@/features/submission';

const HeaderBox = () => {
  const currentSubmissionData = useRecoilValue(currentSubmissionAtom);

  return (
    <Flex align="center" height="64px" px={4} shadow="base">
      <Box flex={1} mr={2}>
        <Text fontWeight="500" fontSize="lg">
          {currentSubmissionData?.examination?.title}
        </Text>
      </Box>
      <Link to={`/examination/${currentSubmissionData?.examination}`}>
        <Button leftIcon={<Icon as={FaFlagCheckered} w={4} h={4} />} colorScheme="red">
          Finish
        </Button>
      </Link>
    </Flex>
  );
};

export default HeaderBox;
