import { Container, Grid, GridItem } from '@chakra-ui/react';
import { DetailSection } from './detail-section';
import { RankingSection } from './ranking-section';
import { ReviewSection } from './review-section';
import { RelatedSection } from './related-section';

export const ExaminationDetailPage = () => {
  return (
    <Container maxWidth="1400px" py={4}>
      <Grid
        templateColumns={{
          lg: '1fr auto',
        }}
        templateRows={{
          lg: 'repeat(3, auto)',
        }}
        gap={5}
      >
        <GridItem colStart={{ lg: 1 }} colEnd={{ lg: 2 }} rowStart={{ lg: 1 }} rowEnd={{ lg: 2 }}>
          <DetailSection />
        </GridItem>
        <GridItem colStart={{ lg: 2 }} colEnd={{ lg: 3 }} rowStart={{ lg: 1 }} rowEnd={{ lg: 4 }}>
          <RankingSection />
        </GridItem>
        <GridItem colStart={{ lg: 1 }} colEnd={{ lg: 2 }} rowStart={{ lg: 2 }} rowEnd={{ lg: 3 }}>
          <ReviewSection />
        </GridItem>
        <GridItem colStart={{ lg: 1 }} colEnd={{ lg: 2 }} rowStart={{ lg: 3 }} rowEnd={{ lg: 4 }}>
          <RelatedSection />
        </GridItem>
      </Grid>
    </Container>
  );
};
