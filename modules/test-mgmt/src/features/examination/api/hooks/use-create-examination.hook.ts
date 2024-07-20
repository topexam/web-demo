import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { createExaminationRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof createExaminationRequest>;
};

export const useCreateExamination = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['examination', 'list'] });
    },
    ...config,
    mutationFn: createExaminationRequest,
  });
};
