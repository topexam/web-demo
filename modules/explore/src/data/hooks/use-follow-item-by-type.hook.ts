import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutationConfig } from '@topexam/web.lib.util';

import { followItemByTypeRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof followItemByTypeRequest>;
};

export const useFollowItemByType = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: (_, paramProps) => {
      queryClient.invalidateQueries({
        queryKey: [
          'followed',
          'item',
          'by-type',
          { itemType: paramProps.itemType, itemId: paramProps.itemId },
        ],
      });
    },
    ...config,
    mutationFn: followItemByTypeRequest,
  });
};
