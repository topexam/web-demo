import { Box, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { useCurrentAuthUser } from '@topexam/web.lib.util';

import { HeaderTabSection } from '@/components';
import { useExaminationList } from '@/features/examination';
import { CreateTest } from './create-test';
import { TestItem } from './test-item';
import TestCreatedListShimmer from './shimmer';

export const TestCreatedTab = () => {
  // const currentUser = useCurrentAuthUser();
  const examinationListQuery = useExaminationList({
    requestQueryParams: {
      q: '',
      // filter: { author_id: currentUser?.app_metadata?.api_user_id ?? '' },
    },
  });

  const _renderExaminationList = () => {
    return (
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={4}>
        <CreateTest />
        {examinationListQuery.data?.map((it) => (
          <Link to={`/examination/${it._id}`} key={it._id}>
            <TestItem item={it} />
          </Link>
        ))}
      </SimpleGrid>
    );
  };

  const _renderContent = () => {
    if (examinationListQuery.isLoading) return <TestCreatedListShimmer />;
    return _renderExaminationList();
  };

  return (
    <Box>
      <HeaderTabSection title="Created Test" description="All examinations which you created">
        {_renderContent()}
      </HeaderTabSection>
    </Box>
  );
};
