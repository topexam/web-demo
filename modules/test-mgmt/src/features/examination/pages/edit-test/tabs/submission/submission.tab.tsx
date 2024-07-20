import { AutoGrid, EBreakpoint } from 'react-grid-container-query';

import { HeaderTabSection } from '@/components';
import SubmissionItem from './submission-item';

export const SubmissionTab = () => {
  return (
    <HeaderTabSection
      title="Submissions"
      description="All submissions for test"
      direction="vertical"
    >
      <AutoGrid gap={EBreakpoint.sm} minChildWidth={{ base: 4 }}>
        <SubmissionItem />
        <SubmissionItem />
        <SubmissionItem />
        <SubmissionItem />
        <SubmissionItem />
        <SubmissionItem />
      </AutoGrid>
    </HeaderTabSection>
  );
};
