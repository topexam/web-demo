import { IQuestionGroupWithQuestion } from '@topexam/web.lib.foundation';

import { QuestionItem } from './question-item';

type Props = {
  item: IQuestionGroupWithQuestion;
};

export const DefaultQuestionGroupItem = ({ item }: Props) => {
  return (
    <>
      {item.questions?.map((it, index) => (
        <QuestionItem key={it._id} item={it} index={index} />
      ))}
    </>
  );
};
