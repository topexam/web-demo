import { VStack } from '@chakra-ui/react';

import { HeaderTabSection } from '@/components';
import RatingItem from './rating-item';

export const RatingTab = () => {
  return (
    <HeaderTabSection title="Ratings" description="All ratings for test" direction="vertical">
      <VStack spacing={3}>
        <RatingItem />
        <RatingItem />
        <RatingItem />
        <RatingItem />
      </VStack>
    </HeaderTabSection>
  );
};
