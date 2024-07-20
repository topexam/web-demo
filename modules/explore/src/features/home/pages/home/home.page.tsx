import { Box, Container, Grid, GridItem } from '@chakra-ui/react';

import { ActivitySection } from '@/components';
import { CategorySection } from './category-section';
import { RecommendedChallengeSection } from './recommended-challenge-section';
import { RecommendedExaminationSection } from './recommended-examination-section';

export const HomePage = () => {
  return (
    <Container maxW="1400px" py={4}>
      <Grid
        templateColumns={{
          lg: '1fr 300px',
        }}
        templateRows={{
          lg: 'auto 1fr',
        }}
        columnGap="50px"
        rowGap={6}
      >
        <GridItem colSpan={{ lg: 1 }} rowStart={{ lg: 1 }} rowEnd={{ lg: 2 }}>
          <CategorySection />
        </GridItem>
        <GridItem colSpan={{ lg: 1 }} rowStart={{ lg: 2 }} rowEnd={{ lg: 3 }}>
          <RecommendedChallengeSection />
          <Box h={6} />
          <RecommendedExaminationSection />
        </GridItem>
        <GridItem colSpan={{ lg: 1 }} rowStart={{ lg: 2 }} rowEnd={{ lg: 3 }}>
          <ActivitySection />
        </GridItem>
      </Grid>
    </Container>
  );
};
