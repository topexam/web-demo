import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IExamination } from '@topexam/web.lib.foundation';
import { MainNetworkAccess } from '@/lib';

export const fetchExaminationItemRequest = async (
  examinationId: string | null
): Promise<IExamination> => {
  if (!examinationId) throw new Error('examinationId must not empty!');
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IExamination>>(
    `svc.examination/examination/item/${examinationId}`
  );
  return requestRes.data.data;
};
