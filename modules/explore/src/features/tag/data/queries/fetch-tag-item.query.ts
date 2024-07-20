import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { ITag } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  tagId: string | null;
};

export const fetchTagItemRequest = async (props: IParamProps): Promise<ITag> => {
  if (props.tagId === null) throw new Error('tagId must be not null');

  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ITag>>(
    `svc.base/tag/item/${props.tagId}`
  );
  return requestRes.data.data;
};
