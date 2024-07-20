import { atom } from 'recoil';

export const selectedQuestionIndexAtom = atom<number>({
  key: 'selectedQuestionIndex',
  default: 1,
});
