import { ICommonQueryResponse } from '@topexam/web.lib.network';

import { EFollowItemType } from '@/enums';
import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  itemType: EFollowItemType;
};

export const fetchFollowedListByTypeRequest = async (
  props: IParamProps
): Promise<ICommonQueryResponse<any[]>> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<any[]>>(
    `svc.follow/follow/list-by-type/${props.itemType}`
  );
  return requestRes.data;
};
