import { Text, Box } from '@chakra-ui/react';
import { useIdFromSlug } from '@topexam/web.lib.util';
import { EmptyDataText } from '@topexam/web.lib.component';

import { useCategoryItem } from '../../data';

export const HeadingSection = () => {
  const categoryId = useIdFromSlug();
  const categoryItemQuery = useCategoryItem({ categoryId });

  return (
    <Box>
      <Text fontWeight="500" fontSize="lg">
        {categoryItemQuery.data?.name || <EmptyDataText />}
      </Text>
      {categoryItemQuery.data?.note && (
        <Text color="gray.600" maxWidth="700px" fontSize="sm">
          {categoryItemQuery.data?.note}
        </Text>
      )}
    </Box>
  );
};
