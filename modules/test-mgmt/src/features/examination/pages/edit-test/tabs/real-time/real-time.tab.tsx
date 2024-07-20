import { Box } from '@chakra-ui/react';
import { AutoGrid, EBreakpoint } from 'react-grid-container-query';
import { useState } from 'react';

import { HeaderTabSection } from '@/components';
import RealtimeDetail from './realtime-detail';
import RealtimeItem from './realtime-item';

export const RealtimeTab = () => {
  const [itemSelected, setItemSelected] = useState<number | null>(null);

  if (itemSelected) {
    return <RealtimeDetail />;
  }
  return (
    <HeaderTabSection
      title="Real-time tracking"
      description="Tracking all activities of the test takers"
      direction="vertical"
    >
      <AutoGrid gap={EBreakpoint.sm} minChildWidth={{ base: 4 }}>
        <Box onClick={() => setItemSelected(123)}>
          <RealtimeItem />
        </Box>
        <RealtimeItem />
        <RealtimeItem />
      </AutoGrid>
    </HeaderTabSection>
  );
};
