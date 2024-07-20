import { ICommonMutationResponse } from '@topexam/web.lib.network';

import { EFollowItemType } from '@/enums';
import { MainNetworkAccess } from '@/lib';

type IParamProps = Record<string, any> & {
  itemType: EFollowItemType;
  itemId: string | null;
};

export const removeFollowItemByTypeRequest = async (
  props: IParamProps
): Promise<ICommonMutationResponse> => {
  if (props.itemId === null) throw new Error('itemId must be not null');

  const resData = await MainNetworkAccess.Delete<ICommonMutationResponse>(
    `svc.follow/follow:unfollow-item/${props.itemType}/${props.itemId}`
  );

  return resData.data;
};
