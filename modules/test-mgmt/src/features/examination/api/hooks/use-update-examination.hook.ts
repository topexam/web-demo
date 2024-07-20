import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { updateExaminationRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof updateExaminationRequest>;
};

export const useUpdateExamination = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: (_, { examinationId }) => {
      queryClient.invalidateQueries({
        queryKey: ['examination', 'item', { examinationId }],
      });
    },
    ...config,
    mutationFn: updateExaminationRequest,
  });
};
