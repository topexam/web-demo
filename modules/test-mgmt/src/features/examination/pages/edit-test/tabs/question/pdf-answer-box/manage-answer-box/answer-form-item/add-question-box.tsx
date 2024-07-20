import { Tr, Td, HStack, Icon, Text } from '@chakra-ui/react';
import { RiAddBoxLine } from 'react-icons/ri';

type Props = {
  onClick: () => void;
};

const AddQuestionBox = ({ onClick }: Props) => {
  return (
    <Tr>
      <Td colSpan={2} py={3} px={4} borderWidth={0}>
        <HStack
          px={4}
          py={2}
          borderWidth={1}
          borderStyle="dashed"
          borderColor="gray.300"
          color="gray.500"
          align="center"
          justify="center"
          cursor="pointer"
          fontSize="sm"
          rounded="base"
          _hover={{ bg: 'gray.50' }}
          onClick={onClick}
        >
          <Icon as={RiAddBoxLine} boxSize={5} />
          <Text>New Question</Text>
        </HStack>
      </Td>
    </Tr>
  );
};

export default AddQuestionBox;
