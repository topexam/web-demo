import { EExaminationMode } from '@topexam/web.lib.foundation';
import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId: string | null;
  payload: {
    title?: string;
    time?: number;
    price?: number;
    sub_category_id?: string;
    tag_ids?: string[];
    description?: string;
    thumbnail?: string;
    mode?: EExaminationMode;
    file?: string;
  };
};

export const updateExaminationRequest = (variables: VariableProps) => {
  const { examinationId, payload } = variables;
  if (!examinationId) throw new Error('examinationId must not empty!');

  return MainNetworkAccess.Update(
    `svc.examination/examination:update-examination/${examinationId}`,
    { data: payload }
  );
};
