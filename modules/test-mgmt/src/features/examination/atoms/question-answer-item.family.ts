import { atomFamily } from 'recoil';
import { IQuestionAnswer } from '@topexam/web.lib.foundation';

export type IQuestionAnswerType = IQuestionAnswer & {
  question_id: string;
};

export const questionAnswerItemAtomFamily = atomFamily<IQuestionAnswerType | null, string>({
  key: 'questionAnswerItem',
  default: null,
});
