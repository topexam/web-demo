import { Box, Center, Icon, Text } from '@chakra-ui/react';
import { RiUploadCloud2Fill } from 'react-icons/ri';

import UploadFileWrapper from './upload-file-wrapper';

const EmptyContentBox = () => {
  return (
    <Box flex={1}>
      <UploadFileWrapper
        renderChild={({ isDragActive }) => (
          <Center
            flexDir="column"
            p={4}
            minH="300px"
            borderWidth={2}
            borderStyle="dashed"
            rounded="base"
            bg={isDragActive ? 'gray.100' : 'white'}
            _hover={{
              bg: 'gray.50',
            }}
          >
            <Icon as={RiUploadCloud2Fill} boxSize={10} color="gray.500" />
            <Text mt={2}>Drag and drop or click here to upload PDF file</Text>
          </Center>
        )}
      />
    </Box>
  );
};

export default EmptyContentBox;
