import { atom } from 'recoil';
import { ISubmission } from '@topexam/web.lib.foundation';

type ISubmissionCombinedType = ISubmission;

export const currentSubmissionAtom = atom<ISubmissionCombinedType | null>({
  key: 'currentSubmission',
  default: null,
});
