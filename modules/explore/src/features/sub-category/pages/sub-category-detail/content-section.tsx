import { useIdFromSlug } from '@topexam/web.lib.util';

import { ExaminationListByResource } from '@/components';
import { EExaminationResource } from '@/enums';

export const ContentSection = () => {
  const subCategoryId = useIdFromSlug();

  return (
    <ExaminationListByResource
      resource={EExaminationResource.SUB_CATEGORY}
      resourceId={subCategoryId}
    />
  );
};
