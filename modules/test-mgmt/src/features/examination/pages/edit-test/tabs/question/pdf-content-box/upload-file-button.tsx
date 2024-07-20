import { Button, Icon } from '@chakra-ui/react';
import { RiUploadCloud2Fill } from 'react-icons/ri';

import UploadFileWrapper from './upload-file-wrapper';

const UploadFileButton = () => {
  return (
    <UploadFileWrapper
      renderChild={({ isLoading }) => (
        <Button
          colorScheme="blue"
          size="sm"
          leftIcon={<Icon as={RiUploadCloud2Fill} boxSize={4} />}
          isLoading={isLoading}
        >
          Change
        </Button>
      )}
    />
  );
};

export default UploadFileButton;
