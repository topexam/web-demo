import { HStack, Box, Icon, Center, Text } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { RiFileCopy2Fill, RiFileList2Fill, RiCheckboxCircleFill } from 'react-icons/ri';

enum EQuestionType {
  SECTION = 'question_group',
  QUESTION = 'question',
}

const OPTION_LIST = [
  {
    key: EQuestionType.SECTION,
    title: 'Create Section',
    icon: RiFileCopy2Fill,
  },
  {
    key: EQuestionType.QUESTION,
    title: 'Create Question',
    icon: RiFileList2Fill,
  },
];

const QUESTION_TYPE_FORM_ITEM_NAME = 'question_type';

export const QuestionTypeFormItem = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name={QUESTION_TYPE_FORM_ITEM_NAME}
      control={control}
      render={({ field }) => {
        const fieldValue = field.value;
        return (
          <HStack spacing={4}>
            {OPTION_LIST.map((it) => {
              const isSelected = it.key === fieldValue;
              return (
                <Box
                  key={it.key}
                  flex={1}
                  borderWidth={1}
                  borderRadius="md"
                  p={3}
                  h="120px"
                  cursor="pointer"
                  position="relative"
                  bg={isSelected ? 'blue.50' : 'gray.50'}
                  color={isSelected ? 'blue.500' : 'gray.500'}
                  borderColor={isSelected ? 'blue.300' : 'gray.300'}
                  _hover={{ bg: isSelected ? 'blue.50' : 'gray.50' }}
                  onClick={() => field.onChange(it.key)}
                >
                  {isSelected && (
                    <Box position="absolute" right={2} top={2}>
                      <Icon as={RiCheckboxCircleFill} boxSize={6} color="blue.400" />
                    </Box>
                  )}
                  <Center flexDir="column" h="full">
                    <Icon as={it.icon} boxSize={7} />
                    <Text>{it.title}</Text>
                  </Center>
                </Box>
              );
            })}
          </HStack>
        );
      }}
    />
  );
};
