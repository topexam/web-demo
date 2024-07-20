import { Box, Button, HStack, Icon, IconButton, Textarea } from '@chakra-ui/react';
import { RiAttachment2, RiSendPlaneFill } from 'react-icons/ri';

const CommentArea = () => {
  return (
    <Box mt={3}>
      <Textarea placeholder="Enter your comment" />
      <HStack pt={3}>
        <HStack flex={1}>
          <IconButton aria-label="Attach files" icon={<Icon as={RiAttachment2} boxSize={5} />} />
        </HStack>
        <Button leftIcon={<Icon as={RiSendPlaneFill} />} colorScheme="blue">
          Send
        </Button>
      </HStack>
    </Box>
  );
};

export default CommentArea;
