import { useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { createBulkQuestionRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof createBulkQuestionRequest>;
};

export const useCreateBulkQuestionMutation = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {},
    ...config,
    mutationFn: createBulkQuestionRequest,
  });
};
