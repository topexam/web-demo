import { Box, Heading } from '@chakra-ui/react';
import { ExaminationItemFull } from '@topexam/web.lib.component';
import {
  genArrayFromNumber,
  genSlugParam,
  getFullNameFromData,
  useExternalNavigate,
} from '@topexam/web.lib.util';
import { EBreakpoint, Grid, GridItem } from 'react-grid-container-query';

import { useRecommendedExaminationList } from '@/features/home/data';
import { ExaminationItemShimmer } from '@/components';

export const RecommendedExaminationSection = () => {
  const externalNavigate = useExternalNavigate();
  const examinationListQuery = useRecommendedExaminationList();

  const _renderExaminationList = () => {
    if (examinationListQuery.isLoading) {
      return genArrayFromNumber(4).map((it) => (
        <GridItem xs={12} sm={6}>
          <ExaminationItemShimmer key={it} />
        </GridItem>
      ));
    }
    return examinationListQuery.data?.map((item, idx) => (
      <GridItem xs={12} sm={6} key={idx}>
        <ExaminationItemFull
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
      </GridItem>
    ));
  };

  return (
    <Box>
      <Heading as="h4" size="md">
        Examination Recommended
      </Heading>
      <Box h={4} />
      <Grid gap={EBreakpoint.sm}>{_renderExaminationList()}</Grid>
    </Box>
  );
};
