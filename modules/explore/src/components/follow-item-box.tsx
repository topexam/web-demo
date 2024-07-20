import { Button, Icon } from '@chakra-ui/react';
import { useMemo } from 'react';
import { FiBell, FiBellOff } from 'react-icons/fi';

import { useFollowedItemByType, useFollowItemByType, useRemoveFollowItemByType } from '@/data';
import { EFollowItemType } from '@/enums';

type Props = {
  itemType: EFollowItemType;
  itemId: string;
};

export const FollowItemBox = ({ itemType, itemId }: Props) => {
  const followedItemQuery = useFollowedItemByType({ itemType, itemId });
  const followItemMutation = useFollowItemByType();
  const removeFollowItemMutation = useRemoveFollowItemByType();

  const _handleToggleFollow = () => {
    if (followedItemQuery.data) {
      removeFollowItemMutation.mutate({ itemType, itemId });
    } else {
      followItemMutation.mutate({ itemType, itemId });
    }
  };

  const [btnScheme, btnIcon, btnLabel] = useMemo(() => {
    return followedItemQuery.data ? ['gray', FiBellOff, 'Unfollow'] : ['green', FiBell, 'Follow'];
  }, [followedItemQuery.data]);

  return (
    <Button
      leftIcon={<Icon as={btnIcon} />}
      colorScheme={btnScheme}
      variant="ghost"
      size="xs"
      _focus={{}}
      onClick={_handleToggleFollow}
      isLoading={
        followedItemQuery.isLoading ||
        followItemMutation.isPending ||
        removeFollowItemMutation.isPending
      }
    >
      {btnLabel}
    </Button>
  );
};
