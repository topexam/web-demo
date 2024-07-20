import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  payload: {
    title: string;
    time: number;
    price: number;
    sub_category_id: string;
    tag_ids?: string[];
    description?: string;
    thumbnail?: string;
  };
};

export const createExaminationRequest = (variables: VariableProps) => {
  const { payload } = variables;
  return MainNetworkAccess.Post('svc.examination/examination:create-examination', {
    data: payload,
  });
};
