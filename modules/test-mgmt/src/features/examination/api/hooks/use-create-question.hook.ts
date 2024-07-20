import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { createQuestionRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof createQuestionRequest>;
};

export const useCreateQuestion = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['question', 'list'] });
    },
    ...config,
    mutationFn: createQuestionRequest,
  });
};
