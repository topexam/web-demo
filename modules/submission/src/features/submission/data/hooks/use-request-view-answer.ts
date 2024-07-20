import { useMutation } from '@tanstack/react-query';
import { MutationConfig } from '@topexam/web.lib.util';

import { requestViewAnswerRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof requestViewAnswerRequest>;
};

export const useRequestViewAnswer = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};

  return useMutation({
    ...config,
    mutationFn: requestViewAnswerRequest,
  });
};
