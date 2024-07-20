import { SimpleGrid, Text, Button, Icon, Center, Skeleton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiOutlineRefresh } from 'react-icons/hi';
import { genSlugParam, genArrayFromNumber } from '@topexam/web.lib.util';
import { EmptyDataText } from '@topexam/web.lib.component';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { ICategory } from '@topexam/web.lib.foundation';

import { useCategoryList } from '@/features/home/data';

export const CategorySection = () => {
  const queryClient = useQueryClient();
  const categoryListQuery = useCategoryList();

  useEffect(() => {
    categoryListQuery.data?.forEach((it) =>
      queryClient.setQueryData<ICategory>(['category', 'item', it._id], it)
    );
  }, [categoryListQuery.data, queryClient]);

  const _renderCategoryList = () => {
    if (categoryListQuery.isLoading) {
      return genArrayFromNumber(4).map((it) => <Skeleton height="40px" key={it} />);
    }

    return categoryListQuery.data?.map((it) => {
      return (
        <Link to={`/category/${genSlugParam(it.name, it._id)}`} key={it._id}>
          <Center
            cursor="pointer"
            p={3}
            flexDir="column"
            boxShadow="md"
            rounded="base"
            bg="white"
            _hover={{ bg: 'gray.50' }}
            title={it.name}
          >
            <Text fontWeight="medium" noOfLines={1}>
              {it.name || <EmptyDataText />}
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="medium">
              50+ test
            </Text>
          </Center>
        </Link>
      );
    });
  };

  if (categoryListQuery.isError) {
    return (
      <Center flexDir="column" w="full" bg="red.50" p={4} rounded="base">
        <Text color="red.500" fontWeight="medium" noOfLines={2}>
          {(categoryListQuery.error as any).toString()}
        </Text>
        <Button
          size="sm"
          colorScheme="red"
          mt={1}
          leftIcon={<Icon as={HiOutlineRefresh} w={5} h={5} />}
          _focus={{}}
        >
          Retry
        </Button>
      </Center>
    );
  }

  return (
    <SimpleGrid gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" spacing={5}>
      {_renderCategoryList()}
    </SimpleGrid>
  );
};
