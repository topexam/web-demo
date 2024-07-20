import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IQuestionWithAnswer } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

export const fetchFileQuestionListWithAnswerRequest = async (
  examinationId: string | null
): Promise<ICommonQueryResponse<IQuestionWithAnswer[]>> => {
  if (!examinationId) throw new Error('examinationId must not empty!');

  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IQuestionWithAnswer[]>>(
    `svc.examination/file-question/list-with-answer/${examinationId}`
  );
  return requestRes.data;
};
