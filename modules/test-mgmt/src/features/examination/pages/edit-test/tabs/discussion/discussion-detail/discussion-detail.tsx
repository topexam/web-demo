import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import { HiChevronDown, HiChevronLeft, HiChevronUp } from 'react-icons/hi';
import CommentArea from './comment-area';
import CommentItem from './comment-item';

export const DiscussionDetail = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <Box p={4}>
      <Box>
        <HStack>
          <Tooltip label="Discussion Listing" aria-label="A tooltip">
            <IconButton
              aria-label="Back"
              icon={<Icon as={HiChevronLeft} w={6} h={6} />}
              size="sm"
              color="gray.500"
              bg="transparent"
              _focus={{}}
            />
          </Tooltip>
          <Text fontSize="lg" fontWeight="500">
            Discussions for Question 1
          </Text>
          <Button
            variant="ghost"
            size="xs"
            _focus={{}}
            leftIcon={<Icon as={showQuestion ? HiChevronUp : HiChevronDown} w={5} h={5} />}
            color="gray.500"
            onClick={() => setShowQuestion(!showQuestion)}
          >
            {showQuestion ? 'Hide' : 'Show'} Question
          </Button>
        </HStack>
        {showQuestion && (
          <Box>
            <Text color="gray.600">Kim loaị nào sau đây có tính khử yếu nhất?</Text>
            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
                lg: 4,
              }}
              spacing={4}
            >
              <Text color="gray.500">A. Ag</Text>
              <Text color="gray.500">B. Mg</Text>
              <Text color="gray.500">C. Fe</Text>
              <Text color="gray.500">D. Ag</Text>
            </SimpleGrid>
            <Text color="gray.600" mt={1}>
              Correct Answer: <strong>A</strong>
            </Text>
            <Text color="gray.500">This is explain</Text>
          </Box>
        )}
      </Box>
      <Divider mt={4} />
      <Box mt={4}>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <Divider mt={5} />
        <CommentArea />
      </Box>
    </Box>
  );
};
