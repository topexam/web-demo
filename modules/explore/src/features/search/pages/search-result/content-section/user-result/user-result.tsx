import { Box, Button, Center, Icon, SimpleGrid } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

import { useSearchUser } from '@/features/search/data';
import { UserResultShimmer } from './shimmer';
import { UserSearchItem } from './user-search-item';

export const UserResult = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('q') || '';

  const userListQuery = useSearchUser({ txt: searchText });

  const _renderContent = () => {
    if (userListQuery.isLoading) {
      return <UserResultShimmer />;
    }

    return userListQuery.data?.pages.map((group, idx) => (
      <Fragment key={idx}>
        {group.data.map((item) => (
          <UserSearchItem key={item._id} item={item} />
        ))}
      </Fragment>
    ));
  };

  return (
    <Box>
      <SimpleGrid columns={{ xl: 3, md: 2 }} spacing={4}>
        {_renderContent()}
        {userListQuery.isFetchingNextPage && <UserResultShimmer />}
      </SimpleGrid>
      {userListQuery.hasNextPage && !userListQuery.isFetchingNextPage && (
        <Center>
          <Button
            leftIcon={<Icon as={RiArrowDownDoubleLine} w={5} h={5} />}
            colorScheme="teal"
            variant="outline"
            my={6}
            onClick={() => userListQuery.fetchNextPage()}
          >
            Load more
          </Button>
        </Center>
      )}
    </Box>
  );
};
