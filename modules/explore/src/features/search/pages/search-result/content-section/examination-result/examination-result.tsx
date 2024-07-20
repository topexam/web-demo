import { Box, Button, Center, Icon, SimpleGrid } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { ExaminationItemFull } from '@topexam/web.lib.component';
import { genSlugParam, getFullNameFromData, useExternalNavigate } from '@topexam/web.lib.util';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

import { useSearchExamination } from '@/features/search/data';
import { ExaminationResultShimmer } from './shimmer';
import { Fragment } from 'react/jsx-runtime';

export const ExaminationResult = () => {
  const externalNavigate = useExternalNavigate();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('q') || '';

  const examinationListQuery = useSearchExamination({ txt: searchText });

  const _renderContent = () => {
    if (examinationListQuery.isLoading) {
      return <ExaminationResultShimmer />;
    }

    return examinationListQuery.data?.pages.map((group, idx) => (
      <Fragment key={idx}>
        {group.data.map((item) => (
          <ExaminationItemFull
            key={item._id}
            itemData={{
              id: item._id,
              imageId: item.thumbnail,
              imageResourceId: item._id,
              imageAlt: '',
              title: item.title,
              rating: item.rating,
              reviewCount: item.review_num,
              author: {
                avatarUrl: item.author?.avatar || '',
                fullName:
                  getFullNameFromData({
                    first_name: item.author?.first_name,
                    last_name: item.author?.last_name,
                    middle_name: item.author?.middle_name,
                  }) || 'unknown',
                verified: item.author?.extra_data?.verified || false,
              },
              time: item.time,
              questionCount: item.question_num,
              playCount: item.submitted_num,
              category: {
                name: item.sub_category?.name ?? 'unknown',
                path: `/sub-category/${genSlugParam(
                  item.sub_category?.name ?? '',
                  item.sub_category_id
                )}`,
              },
              tags:
                item.tags?.map((e) => ({
                  name: e.name ?? 'unknown',
                  path: `/tag/${genSlugParam(e?.name ?? '', e._id)}`,
                })) ?? [],
              price: item.price,
            }}
            onTagNavigate={(to: string) => {
              externalNavigate?.(to);
            }}
            onCategoryNavigate={(to: string) => {
              externalNavigate?.(to);
            }}
            onItemNavigate={(itemId: string) => {
              externalNavigate?.(`/examination/${genSlugParam(item.title, itemId)}`);
            }}
          />
        ))}
      </Fragment>
    ));
  };

  return (
    <Box>
      <SimpleGrid columns={{ xl: 3, md: 2 }} spacing={4}>
        {_renderContent()}
        {examinationListQuery.isFetchingNextPage && <ExaminationResultShimmer />}
      </SimpleGrid>
      {examinationListQuery.hasNextPage && !examinationListQuery.isFetchingNextPage && (
        <Center>
          <Button
            leftIcon={<Icon as={RiArrowDownDoubleLine} w={5} h={5} />}
            colorScheme="teal"
            variant="outline"
            my={6}
            onClick={() => examinationListQuery.fetchNextPage()}
          >
            Load more
          </Button>
        </Center>
      )}
    </Box>
  );
};
