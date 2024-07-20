import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { updateQuestionRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof updateQuestionRequest>;
};

export const useUpdateQuestion = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['question', 'list'] });
    },
    ...config,
    mutationFn: updateQuestionRequest,
  });
};
