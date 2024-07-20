import { Text, Box, Icon, HStack } from '@chakra-ui/react';
import { RiHonourFill } from 'react-icons/ri';
import { useIdFromSlug } from '@topexam/web.lib.util';
import { EmptyDataText } from '@topexam/web.lib.component';

import { FollowItemBox } from '@/components';
import { EFollowItemType } from '@/enums';
import { useSubCategoryItem } from '@/features/sub-category/data';

export const HeadingSection = () => {
  const subCategoryId = useIdFromSlug();
  const subCategoryItemQuery = useSubCategoryItem({ subCategoryId });

  const subCategoryItem = subCategoryItemQuery.data;
  return (
    <Box>
      <HStack>
        <Icon as={RiHonourFill} color="green.500" />
        <Text as="h4" fontWeight="semibold">
          {subCategoryItem?.name || <EmptyDataText />}
        </Text>
        {subCategoryItem && (
          <FollowItemBox itemType={EFollowItemType.SUB_CATEGORY} itemId={subCategoryItem._id} />
        )}
      </HStack>
      {subCategoryItem?.note && (
        <Text color="gray.600" maxWidth="1000px" fontSize="sm">
          {subCategoryItem?.note}
        </Text>
      )}
    </Box>
  );
};
