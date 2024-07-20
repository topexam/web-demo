import { Box } from '@chakra-ui/react';
import { AutoGrid, EBreakpoint } from 'react-grid-container-query';
import { useState } from 'react';

import { HeaderTabSection } from '@/components';
import DiscussionItem from './discussion-item';
import { DiscussionDetail } from './discussion-detail';

export const DiscussionTab = () => {
  const [itemSelected, setItemSelected] = useState<number | null>(null);

  if (itemSelected) {
    return <DiscussionDetail />;
  }

  return (
    <HeaderTabSection title="Discussions" description="All discussion in test" direction="vertical">
      <AutoGrid gap={EBreakpoint.sm} minChildWidth={{ base: 4 }}>
        <Box onClick={() => setItemSelected(123)}>
          <DiscussionItem />
        </Box>
        <DiscussionItem />
        <DiscussionItem />
      </AutoGrid>
    </HeaderTabSection>
  );
};
