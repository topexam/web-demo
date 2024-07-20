import { useMutation } from '@tanstack/react-query';
import { MutationConfig } from '@topexam/web.lib.util';

import { submitExaminationResultRequest } from '../mutations';

type IParamProps = {
  config?: MutationConfig<typeof submitExaminationResultRequest>;
};

export const useSubmitExaminationResult = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};

  return useMutation({
    ...config,
    mutationFn: submitExaminationResultRequest,
  });
};
