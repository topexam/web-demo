import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { ICategory } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  categoryId: string | null;
};

export const fetchCategoryItemRequest = async (props: IParamProps): Promise<ICategory> => {
  if (props.categoryId === null) throw new Error('categoryId must be not null!');
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ICategory>>(
    `svc.base/category/item/${props.categoryId}`
  );
  return requestRes.data.data;
};
