import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import { ContentSection } from './content-section';
import { HeadingSection } from './heading-section';

export const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('q')?.trim() || '';

  const _renderContent = () => {
    if (!searchText) return <Box>No text found! Please enter the text to search...</Box>;

    return (
      <Grid columnGap={4} rowGap={5}>
        <GridItem>
          <HeadingSection />
        </GridItem>
        <GridItem>
          <ContentSection />
        </GridItem>
      </Grid>
    );
  };

  return (
    <Container maxWidth="1400px" py={4}>
      {_renderContent()}
    </Container>
  );
};
