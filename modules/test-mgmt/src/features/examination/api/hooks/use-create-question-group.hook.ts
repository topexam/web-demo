import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { createQuestionGroupRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof createQuestionGroupRequest>;
};

export const useCreateQuestionGroup = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['question-group', 'list'] });
    },
    ...config,
    mutationFn: createQuestionGroupRequest,
  });
};