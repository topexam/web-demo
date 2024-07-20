import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { examinationAnswerResultListSelector } from '@/features/submission/states';

const AnswersSheet = () => {
  const examinationAnswerResultList = useRecoilValue(examinationAnswerResultListSelector);

  const _renderAnswerResultList = () => {
    return examinationAnswerResultList.map((item, index) => {
      const isCorrect = compareAnswerResult(item.user_options, item.answer_options);
      if (isCorrect) {
        return (
          <Box
            p={2}
            borderRadius="md"
            cursor="pointer"
            bg="green.500"
            color="white"
            fontWeight="500"
            key={item.question}
          >
            {`${index + 1}`.padStart(2, '0')}. {item.user_options.join(' ')}
          </Box>
        );
      }

      return (
        <Box
          p={2}
          borderRadius="md"
          cursor="pointer"
          bg="red.100"
          color="red.500"
          fontWeight="500"
          key={item.question}
          isTruncated
        >
          {`${index + 1}`.padStart(2, '0')}.&nbsp;
          <Text as="span">
            {item.user_options.length ? (
              item.user_options.map((it) => {
                if (item.answer_options.includes(it)) {
                  return (
                    <Text as="span" color="green.500" key={it}>
                      {it}
                    </Text>
                  );
                }
                return <del key={it}>{it}</del>;
              })
            ) : (
              <span>_</span>
            )}
          </Text>
          <Text as="span"> -&gt; </Text>
          <Text as="span" color="green.500">
            {item.answer_options.map((it) => {
              if (!item.user_options.includes(it)) {
                return (
                  <Text as="span" color="green.500" key={it}>
                    {it}{' '}
                  </Text>
                );
              }
              return null;
            })}
          </Text>
        </Box>
      );
    });
  };

  return (
    <Box mt={5}>
      <Text fontWeight="500" fontSize="lg">
        Answers Sheet
      </Text>
      <SimpleGrid columns={3} spacing={2} mt={3}>
        {_renderAnswerResultList()}
      </SimpleGrid>
    </Box>
  );
};

const compareAnswerResult = (userOptions: string[], answerOptions: string[]) => {
  if (!userOptions.length) return false;

  for (let i = 0; i < userOptions.length; i++) {
    if (!answerOptions.includes(userOptions[i])) {
      return false;
    }
  }

  return true;
};

export default AnswersSheet;
