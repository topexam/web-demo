import { useMutation } from '@tanstack/react-query';
import { MutationConfig } from '@topexam/web.lib.util';

import { takeExaminationRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof takeExaminationRequest>;
};

export const useTakeExamination = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};

  return useMutation({
    ...config,
    mutationFn: takeExaminationRequest,
  });
};
