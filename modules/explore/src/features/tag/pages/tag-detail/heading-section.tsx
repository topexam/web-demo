import { Text, Box, Icon, HStack } from '@chakra-ui/react';
import { HiHashtag } from 'react-icons/hi';
import { useIdFromSlug } from '@topexam/web.lib.util';
import { EmptyDataText } from '@topexam/web.lib.component';

import { FollowItemBox } from '@/components';
import { EFollowItemType } from '@/enums';
import { useTagItem } from '@/features/tag/data';

export const HeadingSection = () => {
  const tagId = useIdFromSlug();
  const tagItemQuery = useTagItem({ tagId });

  const tagItem = tagItemQuery.data;
  return (
    <Box>
      <HStack>
        <Icon as={HiHashtag} color="blue.500" />
        <Text as="h4" fontWeight="semibold">
          {tagItem?.name ?? <EmptyDataText />}
        </Text>

        {tagItem && <FollowItemBox itemType={EFollowItemType.TAG} itemId={tagItem._id} />}
      </HStack>
      {tagItem?.note && (
        <Text color="gray.600" maxWidth="1000px">
          {tagItem?.note}
        </Text>
      )}
    </Box>
  );
};
