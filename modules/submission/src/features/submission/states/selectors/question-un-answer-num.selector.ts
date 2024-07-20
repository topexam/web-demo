import { questionAnswerListAtom } from '../atoms/question-answer-list.atom';
import { selector } from 'recoil';

export const questionUnAnswerNumSelector = selector<number>({
  key: 'questionUnAnswerNum',
  get: ({ get }) => {
    const questionAnswerList = get(questionAnswerListAtom);
    return questionAnswerList.filter((question) => !question.selections.length).length;
  },
});
