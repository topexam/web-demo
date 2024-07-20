import { Text, Box } from '@chakra-ui/react';
import { genSlugParam, getFullNameFromData, useExternalNavigate } from '@topexam/web.lib.util';
import { ExaminationItemFull } from '@topexam/web.lib.component';
import { IExamination } from '@topexam/web.lib.foundation';
import { EBreakpoint, Grid, GridItem } from 'react-grid-container-query';

import { EExaminationResource } from '@/enums';
import { useExaminationListByResource } from '@/data';
import { ExaminationListShimmer } from './shimmer';

type Props = {
  resource: EExaminationResource;
  resourceId: string | null;
};

export const ExaminationListByResource = ({ resource, resourceId }: Props) => {
  const externalNavigate = useExternalNavigate();
  const examinationListQuery = useExaminationListByResource({ resource, resourceId });

  if (examinationListQuery.isLoading) {
    return (
      <GridItem xs={12} sm={6}>
        <ExaminationListShimmer />
      </GridItem>
    );
  }

  const _renderExaminationList = () => {
    return examinationListQuery.data?.map((item: IExamination) => (
      <GridItem xs={12} sm={6}>
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
      </GridItem>
    ));
  };

  if (!examinationListQuery.data?.length) {
    return <Text fontWeight="500">Empty Data!</Text>;
  }

  return (
    <Box>
      <Grid gap={EBreakpoint.sm}>{_renderExaminationList()}</Grid>
      {/* <Center>
        <Button
          leftIcon={<Icon as={HiArrowCircleDown} w={5} h={5} />}
          colorScheme="teal"
          variant="outline"
          _focus={{}}
          mt={4}
          size="sm"
        >
          Load more
        </Button>
      </Center> */}
    </Box>
  );
};
