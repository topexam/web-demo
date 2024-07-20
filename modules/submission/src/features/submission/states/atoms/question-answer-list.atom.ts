import { atom } from 'recoil';
import { IQuestion } from '@topexam/web.lib.foundation';

type IQuestionAnswerType = IQuestion & {
  selections: string[];
};

export const questionAnswerListAtom = atom<IQuestionAnswerType[]>({
  key: 'questionAnswerList',
  default: [],
});
