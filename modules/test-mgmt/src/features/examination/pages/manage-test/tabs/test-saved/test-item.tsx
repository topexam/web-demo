import { Button, HStack, Icon, Tag, Text } from '@chakra-ui/react';
import { RiCoinFill } from 'react-icons/ri';
import { MdOutlineBookmarkRemove } from 'react-icons/md';

import { ExaminationItem } from '@/components';

const TestItem = () => {
  return (
    <ExaminationItem
      extraContent={
        <HStack justify="space-between">
          <Tag colorScheme="yellow">
            <Icon as={RiCoinFill} color="yellow.500" />
            &nbsp;
            <Text as="span" color="yellow.500" fontWeight="500" fontSize="sm">
              20 Coin
            </Text>
          </Tag>
          <Button
            leftIcon={<Icon as={MdOutlineBookmarkRemove} boxSize={4} />}
            colorScheme="blue"
            size="sm"
          >
            Unsave
          </Button>
        </HStack>
      }
    />
  );
};

export default TestItem;
