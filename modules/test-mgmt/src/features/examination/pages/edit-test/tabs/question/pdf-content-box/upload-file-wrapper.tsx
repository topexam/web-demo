import { useCallback } from 'react';
import { Box } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useParams } from 'react-router-dom';
import { useGenerateUploadUrl, useUploadFileToUrl } from '@topexam/web.lib.foundation';

import { useUpdateExamination } from '@/features/examination/api';
import { IPageRouteParams } from '@/types';

type IRenderChildArgs = {
  isLoading: boolean;
  isDragActive: boolean;
};

type Props = {
  renderChild: (args: IRenderChildArgs) => JSX.Element;
};

const UploadFileWrapper = ({ renderChild }: Props) => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;

  const generateFileUrlMutation = useGenerateUploadUrl();
  const uploadFileToUrlMutation = useUploadFileToUrl();
  const updateExaminationMutation = useUpdateExamination();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) return;
      const selectedFile = acceptedFiles[0];
      if (selectedFile) {
        generateFileUrlMutation.mutate(
          {
            payload: {
              name: selectedFile.name,
              size: selectedFile.size,
              type: selectedFile.type,
              resource: examinationId,
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
                  onSuccess: () => {
                    updateExaminationMutation.mutate({
                      examinationId,
                      payload: { file: resData.id },
                    });
                  },
                }
              );
            },
          }
        );
      }
    },
    [examinationId, generateFileUrlMutation, uploadFileToUrlMutation, updateExaminationMutation]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
    },
  });

  const isLoading =
    generateFileUrlMutation.isPending ||
    uploadFileToUrlMutation.isPending ||
    updateExaminationMutation.isPending;

  return (
    <Box {...getRootProps()}>
      <input {...getInputProps()} />
      {renderChild({ isLoading, isDragActive })}
    </Box>
  );
};

export default UploadFileWrapper;
