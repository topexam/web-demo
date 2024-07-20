import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { removeQuestionRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof removeQuestionRequest>;
};

export const useRemoveQuestion = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['question', 'list', 'with-answer'] });
    },
    ...config,
    mutationFn: removeQuestionRequest,
  });
};
