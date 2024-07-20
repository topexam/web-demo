import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { genSlugParam, useExternalNavigate, useIdFromSlug } from '@topexam/web.lib.util';
import { ExaminationItemFull } from '@topexam/web.lib.component';

import { useRelatedExaminationList } from '@/features/examination/data';
import RelatedExaminationListShimmer from './shimmer';

export const RelatedSection = () => {
  const externalNavigate = useExternalNavigate();
  const examinationId = useIdFromSlug();

  const examinationListQuery = useRelatedExaminationList({ examinationId });

  const _renderRelatedExaminationContent = () => {
    if (examinationListQuery.isLoading) {
      return <RelatedExaminationListShimmer />;
    }

    if (!examinationListQuery.data?.length) {
      return <Text mt={3}>Empty Data!</Text>;
    }

    return (
      <SimpleGrid mt={3} columns={{ lg: 2 }} spacing={5}>
        {examinationListQuery.data?.map((item) => (
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
                avatarUrl: '',
                fullName: 'An NQ',
                verified: true,
              },
              time: item.time,
              questionCount: item.question_num,
              playCount: item.submitted_num,
              category: {
                name: item.sub_category?.name ?? '<unknown>',
                path: `/sub-category/${genSlugParam(
                  item.sub_category?.name ?? '',
                  item.sub_category_id
                )}`,
              },
              tags:
                item.tags?.map((e) => ({
                  name: e.name ?? '<unknown>',
                  path: `/sub-category/${genSlugParam(e?.name ?? '', e._id)}`,
                })) ?? [],
              price: item.price,
            }}
            onItemNavigate={(itemId: string) => {
              externalNavigate?.(`/examination/${genSlugParam(item.title, itemId)}`);
            }}
            onTagNavigate={(to: string) => {
              externalNavigate?.(to);
            }}
            onCategoryNavigate={(to: string) => {
              externalNavigate?.(to);
            }}
          />
        ))}
      </SimpleGrid>
    );
  };

  return (
    <Box>
      <Text fontWeight="500" fontSize="lg">
        Examination Related
      </Text>
      {_renderRelatedExaminationContent()}
    </Box>
  );
};
