import { atom } from 'recoil';

export const questionAnswerListAtom = atom<string[]>({
  key: 'questionAnswerList',
  default: [],
});
