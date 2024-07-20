import { ICommonMutationResponse } from '@topexam/web.lib.network';
import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  payload: {
    name: string;
    slug: string;
    note?: string;
  };
};

export const createTagRequest = async (props: VariableProps): Promise<ICommonMutationResponse> => {
  const requestRes = await MainNetworkAccess.Post<ICommonMutationResponse>(
    'svc.base/tag:create-tag',
    {
      data: props.payload,
    }
  );

  return requestRes.data;
};
