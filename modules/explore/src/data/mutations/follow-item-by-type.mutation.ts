import { ICommonMutationResponse } from '@topexam/web.lib.network';

import { EFollowItemType } from '@/enums';
import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  itemType: EFollowItemType;
  itemId: string | null;
};

export const followItemByTypeRequest = async (
  props: IParamProps
): Promise<ICommonMutationResponse> => {
  if (props.itemId === null) throw new Error('itemId must be not null');

  const resData = await MainNetworkAccess.Post<ICommonMutationResponse>(
    `svc.follow/follow:follow-item/${props.itemType}/${props.itemId}`
  );

  return resData.data;
};
