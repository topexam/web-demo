import { Center, Icon, HStack, Button, Text } from '@chakra-ui/react';
import { HiOutlineArchive, HiPlus } from 'react-icons/hi';

type Props = {
  onClick: () => void;
};

const EmptyBox = ({ onClick }: Props) => {
  return (
    <Center p={4} flexDir="column" borderBottomWidth={1} borderTopWidth={1} borderStyle="dashed">
      <Icon as={HiOutlineArchive} boxSize={8} color="gray.400" />
      <Text mt={2} fontSize="sm" color="gray.500" fontWeight="medium">
        No Questions
      </Text>
      <Text fontSize="sm" color="gray.400">
        Get started by creating a new question.
      </Text>
      <HStack>
        <Button
          mt={4}
          size="sm"
          colorScheme="green"
          leftIcon={<Icon as={HiPlus} boxSize={4} />}
          onClick={onClick}
        >
          New Question
        </Button>
      </HStack>
    </Center>
  );
};

export default EmptyBox;
