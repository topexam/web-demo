import { Text, Icon, HStack, Link, Badge } from '@chakra-ui/react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { EExaminationStatus } from '@topexam/web.lib.foundation';
import { EmptyDataText } from '@topexam/web.lib.component';

import { IPageRouteParams } from '@/types';
import { useExaminationItem } from '@/features/examination';
import PublishBox from './publish-box';

export const EditTestHeader = () => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;
  const examinationItemQuery = useExaminationItem({ examinationId });

  const _renderTitle = () => {
    if (examinationItemQuery.isLoading) {
      return (
        <Text as="h1" fontWeight="semibold" fontSize="xl">
          Loading...
        </Text>
      );
    }

    return (
      <>
        <Text as="h1" fontWeight="semibold" fontSize="xl">
          {examinationItemQuery.data?.title || <EmptyDataText />}
        </Text>
        {examinationItemQuery.data?.status === EExaminationStatus.DRAFT ? (
          <Badge colorScheme="red">{examinationItemQuery.data?.status}</Badge>
        ) : (
          <Badge colorScheme="green">rev {examinationItemQuery.data?.__v}</Badge>
        )}
      </>
    );
  };

  return (
    <>
      <Link as={RouterLink} to="/examination">
        <HStack color="gray.500" fontSize="sm">
          <Icon as={RiArrowLeftLine} />
          <Text>Examination Management</Text>
        </HStack>
      </Link>
      <HStack>
        <HStack flex={1}>{_renderTitle()}</HStack>
        <HStack spacing={2}>
          <PublishBox />
        </HStack>
      </HStack>
    </>
  );
};
