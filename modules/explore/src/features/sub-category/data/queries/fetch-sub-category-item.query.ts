import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { ISubCategory } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  subCategoryId: string | null;
};

export const fetchSubCategoryItemRequest = async (props: IParamProps): Promise<ISubCategory> => {
  if (props.subCategoryId === null) throw new Error('subCategoryId must be not null');

  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ISubCategory>>(
    `svc.base/sub-category/item/${props.subCategoryId}`
  );
  return requestRes.data.data;
};
