import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import { HiPlay } from 'react-icons/hi';

import { ExaminationItem } from '@/components';

const TestItem = () => {
  return (
    <ExaminationItem
      extraContent={
        <HStack>
          <Text as="span" color="green.500" fontWeight="medium" fontSize="sm" flex={1}>
            30 day(s) left
          </Text>
          <Button leftIcon={<Icon as={HiPlay} boxSize={4} />} colorScheme="blue" size="sm">
            Take
          </Button>
        </HStack>
      }
    />
  );
};

export default TestItem;
