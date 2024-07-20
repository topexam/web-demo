import { EExaminationMode, IExamination } from '@topexam/web.lib.foundation';
import NormalQuestionsBox from './normal-questions-box';
import { PDFQuestionsBox } from './pdf-questions-box';

type Props = {
  examination: IExamination | null;
};

export const QuestionsBox = ({ examination }: Props) => {
  if (examination?.mode === EExaminationMode.NORMAL) {
    return <NormalQuestionsBox examinationId={examination?._id} />;
  }

  if (examination?.mode === EExaminationMode.PDF) {
    return <PDFQuestionsBox examination={examination} />;
  }

  return null;
};
