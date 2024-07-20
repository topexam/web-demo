import { useCallback, useMemo } from 'react';
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Spinner,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { RiImageAddFill } from 'react-icons/ri';
import { HiCamera } from 'react-icons/hi';
import { useFileUrl, useGenerateUploadUrl, useUploadFileToUrl } from '@topexam/web.lib.foundation';

import { FEATURED_IMAGE_FORM_ITEM_NAME } from './featured-image-form-item';

type Props = {
  formField: ControllerRenderProps<FieldValues, typeof FEATURED_IMAGE_FORM_ITEM_NAME>;
};

const UploaderContent = ({ formField }: Props) => {
  const fieldValue = formField.value;
  const fileUrl = useFileUrl({ resourceId: 'examination_id', fileId: fieldValue });
  const generateFileUrlMutation = useGenerateUploadUrl();
  const uploadFileToUrlMutation = useUploadFileToUrl();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const [selectedFile] = acceptedFiles || [];
      if (selectedFile) {
        generateFileUrlMutation.mutate(
          {
            payload: {
              name: selectedFile.name,
              size: selectedFile.size,
              type: selectedFile.type,
              resource: 'examination_id',
            },
          },
          {
            onSuccess: (resData) => {
              const uploadUrl = resData.upload_url;
              uploadFileToUrlMutation.mutate(
                {
                  url: uploadUrl,
                  payload: { file: selectedFile },
                },
                {
                  onSuccess: () => formField.onChange(resData.id),
                }
              );
            },
          }
        );
      }
    },
    [formField, generateFileUrlMutation, uploadFileToUrlMutation]
  );

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
    multiple: false,
    accept: { 'image/*': ['image/jpeg', 'image/png'] },
    onDropAccepted: onDrop,
  });

  const [isError, errorMessage] = useMemo(() => {
    if (generateFileUrlMutation.error) return [true, generateFileUrlMutation.error?.toString()];
    if (uploadFileToUrlMutation.error) return [true, uploadFileToUrlMutation.error?.toString()];

    const fileNum = fileRejections.length;

    if (acceptedFiles.length || !fileNum) return [false, ''];
    if (fileNum === 1) return [true, fileRejections[0].errors[0].message];

    return [true, 'You only can upload one image!'];
  }, [acceptedFiles, fileRejections, generateFileUrlMutation.error, uploadFileToUrlMutation.error]);

  const _renderContent = () => {
    if (generateFileUrlMutation.isPending || uploadFileToUrlMutation.isPending) {
      return <Spinner size="lg" color="blue.500" />;
    }

    if (fileUrl) {
      return (
        <Box bg="gray.100" rounded="base" position="relative" boxSize="full">
          <Image rounded="base" boxSize="full" fit="cover" src={fileUrl} />
          <Box position="absolute" top={2} right={2} {...getRootProps()}>
            <input {...getInputProps()} />
            <Button colorScheme="blue" size="sm" leftIcon={<Icon as={HiCamera} boxSize={4} />}>
              Change
            </Button>
          </Box>
        </Box>
      );
    }

    return (
      <>
        <input {...getInputProps()} />
        <Icon as={RiImageAddFill} w={8} h={8} color="gray.500" />
        <Box mx={3}>
          <Text isTruncated color="gray.500" fontSize="sm">
            Drag 'n' drop a image here, or click to select a image
          </Text>
        </Box>
      </>
    );
  };

  return (
    <FormControl id={FEATURED_IMAGE_FORM_ITEM_NAME} isInvalid={isError}>
      <FormLabel>Featured Image</FormLabel>
      <Center
        {...getRootProps({ className: 'custom-dropzone' })}
        borderWidth={1}
        borderStyle="dashed"
        borderColor="gray.300"
        rounded="base"
        bg="gray.50"
        _hover={{ bg: 'gray.100' }}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        h="200px"
        cursor="pointer"
      >
        {_renderContent()}
      </Center>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default UploaderContent;
