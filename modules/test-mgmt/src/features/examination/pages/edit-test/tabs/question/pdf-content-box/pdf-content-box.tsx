import { Box, Center, HStack, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { EmptyDataText } from '@topexam/web.lib.component';
import { useFileItem, useFileUrl } from '@topexam/web.lib.foundation';

import { IPageRouteParams } from '@/types';
import { useExaminationItem } from '@/features/examination';
import EmptyContentBox from './empty-content-box';
import PreviewBox from './preview-box';
import UploadFileButton from './upload-file-button';

export const PDFContentBox = () => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;

  const examinationItemQuery = useExaminationItem({ examinationId });

  const fileId = examinationItemQuery?.data?.file || null;
  const fileItemQuery = useFileItem({ resourceId: examinationId, fileId: fileId });
  const fileUrl = useFileUrl({ resourceId: examinationId, fileId: fileId });

  console.log(examinationItemQuery.isLoading, fileItemQuery.isLoading);

  if (examinationItemQuery.isFetching || fileItemQuery.isFetching) {
    return (
      <Center flex={1}>
        <Spinner color="blue.500" />
      </Center>
    );
  }

  const fileItem = fileItemQuery.data;
  if (!fileUrl || !fileItem) return <EmptyContentBox />;

  return (
    <Box flex={1}>
      <HStack px={4} py={3} bg="gray.100">
        <Box flex={1}>
          <Text fontSize="lg" fontWeight="semibold" noOfLines={1} title={fileItem?.name}>
            {fileItem?.name || <EmptyDataText />}
          </Text>
          <Text color="gray.500" noOfLines={1}>
            {fileItem.createdAt ? (
              format(new Date(fileItem.createdAt), 'MMM dd, yyyy HH:mm')
            ) : (
              <EmptyDataText />
            )}
            , by An Nguyen Quang
          </Text>
        </Box>
        <UploadFileButton />
      </HStack>
      <Box overflow="hidden">
        <PreviewBox fileUrl={fileUrl || null} />
      </Box>
    </Box>
  );
};
