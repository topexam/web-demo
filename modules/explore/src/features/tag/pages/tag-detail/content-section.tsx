import { useIdFromSlug } from '@topexam/web.lib.util';

import { EExaminationResource } from '@/enums';
import { ExaminationListByResource } from '@/components';

export const ContentSection = () => {
  const tagId = useIdFromSlug();
  return <ExaminationListByResource resource={EExaminationResource.TAG} resourceId={tagId} />;
};
