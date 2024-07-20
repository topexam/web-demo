import { Box, Center, Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { IAnswer, IQuestion, IUserAnswer } from '@topexam/web.lib.foundation';

import DiscussionDrawer from './discussion.drawer';
import ReportQuestionDialog from './report-question.dialog';

type Props = {
  item: IQuestion & {
    user_answer?: IUserAnswer;
    answer?: IAnswer;
    position: number;
  };
};

export const QuestionAnswerDetail = ({ item }: Props) => {
  const _renderOptionList = () => {
    return item.options.map((it) => {
      const isCorrectAnswer = !!item.answer?.options.includes(it.title);
      if (isCorrectAnswer) {
        return (
          <Flex
            align="start"
            cursor="pointer"
            bg="green.50"
            py={2}
            px={3}
            borderRadius="md"
            key={it.title}
          >
            <Center
              width="30px"
              height="30px"
              borderRadius="100%"
              bg="green.100"
              mr={3}
              fontWeight="500"
              borderWidth="2px"
              borderColor="green.300"
              color="green.500"
            >
              {it.title}
            </Center>
            <Text flex={1}>{it.content}</Text>
          </Flex>
        );
      }

      const isUserAnswer = item.user_answer?.options.includes(it.title);
      if (isUserAnswer) {
        return (
          <Flex
            align="start"
            cursor="pointer"
            bg="red.50"
            py={2}
            px={3}
            borderRadius="md"
            key={it.title}
          >
            <Center
              width="30px"
              height="30px"
              borderRadius="100%"
              bg="red.100"
              mr={3}
              fontWeight="500"
              borderWidth="2px"
              borderColor="red.300"
              color="red.500"
            >
              {it.title}
            </Center>
            <Text flex={1}>{it.content}</Text>
          </Flex>
        );
      }

      return (
        <Flex
          align="start"
          cursor="pointer"
          _hover={{ bg: 'gray.50' }}
          py={2}
          px={3}
          borderRadius="md"
          key={it.title}
        >
          <Center
            width="30px"
            height="30px"
            borderRadius="100%"
            bg="gray.100"
            mr={3}
            fontWeight="500"
          >
            {it.title}
          </Center>
          <Text flex={1}>{it.content}</Text>
        </Flex>
      );
    });
  };

  return (
    <Center mr={4}>
      <Box borderWidth="1px" borderRadius="md" p={4} maxW="800px" w="100%">
        <Text fontWeight="500" fontSize="lg">
          Question {item.position.toString().padStart(2, '0')}
        </Text>
        <Text>{item.title}</Text>
        <Box mt={3}>
          <SimpleGrid columns={1}>{_renderOptionList()}</SimpleGrid>
        </Box>
        <Box mt={3}>
          <Text fontWeight="500" fontSize="lg">
            Explain
          </Text>
          <Text>{item?.answer?.explain || 'No explain!'}</Text>
        </Box>
        <HStack mt={4}>
          <DiscussionDrawer />
          <ReportQuestionDialog />
        </HStack>
      </Box>
    </Center>
  );
};
