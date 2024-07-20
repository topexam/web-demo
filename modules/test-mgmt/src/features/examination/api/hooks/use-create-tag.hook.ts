import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { createTagRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof createTagRequest>;
};

export const useCreateTag = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tag', 'list'] });
    },
    ...config,
    mutationFn: createTagRequest,
  });
};
