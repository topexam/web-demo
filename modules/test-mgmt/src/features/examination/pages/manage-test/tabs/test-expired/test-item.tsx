import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import { ExaminationItem } from '@/components';

const TestItem = () => {
  return (
    <ExaminationItem
      extraContent={
        <HStack justify="space-between">
          <Text as="span" color="red.500" fontWeight="medium" fontSize="sm" flex={1}>
            Expires on June 20, 2022
          </Text>
          <Button
            leftIcon={<Icon as={RiMoneyDollarCircleFill} boxSize={4} />}
            colorScheme="blue"
            size="sm"
          >
            Rebuy
          </Button>
        </HStack>
      }
    />
  );
};

export default TestItem;
