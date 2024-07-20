import * as qs from 'qs';
import { ICommonQueryParamsRequest, ICommonQueryResponse } from '@topexam/web.lib.network';
import { IQuestionGroup } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type Props = {
  examinationId: string | null;
  queryParams?: ICommonQueryParamsRequest;
};

export const fetchQuestionGroupListRequest = async (
  props: Props
): Promise<ICommonQueryResponse<IQuestionGroup[]>> => {
  const { examinationId, queryParams } = props;
  if (!examinationId) throw new Error('examinationId must not empty!');

  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IQuestionGroup[]>>(
    `svc.examination/question-group/list/${props.examinationId}`,
    {
      params: {
        filter: qs.stringify(queryParams?.filter ?? {}),
        sort: queryParams?.sort,
        page: queryParams?.pagination?.page || 1,
        per_page: queryParams?.pagination?.per_page || 10,
      },
    }
  );
  return requestRes.data;
};
