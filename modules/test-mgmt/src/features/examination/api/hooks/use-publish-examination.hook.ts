import { useQueryClient, useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@topexam/web.lib.util';
import { publishExaminationRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof publishExaminationRequest>;
};

export const usePublishExaminationMutation = (paramProps?: IParamProps) => {
  const queryClient = useQueryClient();
  const { config } = paramProps || {};

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['examination', 'list'] });
    },
    ...config,
    mutationFn: publishExaminationRequest,
  });
};
