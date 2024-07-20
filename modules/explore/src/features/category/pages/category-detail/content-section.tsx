import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import { useIdFromSlug } from '@topexam/web.lib.util';
import { ISubCategory } from '@topexam/web.lib.foundation';

import { ExaminationListByResource } from '@/components';
import { EExaminationResource } from '@/enums';
import { useCategoryItem } from '../../data';
import { ContentSectionShimmer } from './content-section-shimmer';

export const ContentSection = () => {
  const categoryId = useIdFromSlug();
  const categoryItemQuery = useCategoryItem({ categoryId });

  const _renderTabList = (subCategoryList: ISubCategory[]) => {
    return subCategoryList?.map((item) => {
      return (
        <Tab _focus={{}} key={item._id}>
          {item?.name ?? '___'}
        </Tab>
      );
    });
  };

  const _renderTabPanel = (subCategoryList: ISubCategory[]) => {
    return subCategoryList?.map((item) => {
      return (
        <TabPanel key={item._id}>
          <ExaminationListByResource
            resource={EExaminationResource.SUB_CATEGORY}
            resourceId={item._id}
          />
        </TabPanel>
      );
    });
  };

  if (categoryItemQuery.isLoading) {
    return <ContentSectionShimmer />;
  }

  const subCategoryList = (categoryItemQuery.data?.sub_categories as ISubCategory[]) || [];

  if (!subCategoryList?.length) {
    return <Text fontWeight="500">Empty Data!</Text>;
  }

  return (
    <Tabs colorScheme="green">
      <TabList>{_renderTabList(subCategoryList)}</TabList>
      <TabPanels>{_renderTabPanel(subCategoryList)}</TabPanels>
    </Tabs>
  );
};
