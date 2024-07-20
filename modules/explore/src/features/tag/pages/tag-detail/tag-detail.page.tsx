import { Container, Grid, GridItem } from '@chakra-ui/react';

import { ActivitySection } from '@/components';
import { HeadingSection } from './heading-section';
import { ContentSection } from './content-section';

export const TagDetailPage = () => {
  return (
    <Container maxWidth="1400px" py={4}>
      <Grid
        templateColumns={{
          lg: '1fr 300px',
        }}
        templateRows={{
          lg: 'auto 1fr',
        }}
        columnGap="50px"
        rowGap={4}
      >
        <GridItem colSpan={{ lg: 1 }} rowStart={{ lg: 1 }} rowEnd={{ lg: 2 }}>
          <HeadingSection />
        </GridItem>
        <GridItem colSpan={{ lg: 1 }} rowStart={{ lg: 2 }} rowEnd={{ lg: 3 }}>
          <ContentSection />
        </GridItem>
        <GridItem colSpan={{ lg: 1 }} rowStart={{ lg: 2 }} rowEnd={{ lg: 3 }}>
          <ActivitySection />
        </GridItem>
      </Grid>
    </Container>
  );
};
