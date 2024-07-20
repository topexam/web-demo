import { ICommonQueryResponse } from '@topexam/web.lib.network';

import { EFollowItemType } from '@/enums';
import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  itemType: EFollowItemType;
  itemId: string | null;
};

export const fetchFollowedItemByTypeRequest = async (props: IParamProps): Promise<any> => {
  if (props.itemId === null) throw new Error('itemId must be not null');

  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<any>>(
    `svc.follow/follow/item-by-type/${props.itemType}/${props.itemId}`
  );
  return requestRes.data.data;
};
