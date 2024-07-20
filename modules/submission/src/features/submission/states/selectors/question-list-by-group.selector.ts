import { selector } from 'recoil';
import { IQuestion, IQuestionGroup } from '@topexam/web.lib.foundation';

import { currentSubmissionAtom } from '../atoms';

type IQuestionByGroupType = IQuestionGroup & {
  questions: IQuestion[];
};

export const questionListByGroupSelector = selector<IQuestionByGroupType[]>({
  key: 'questionListByGroup',
  get: ({ get }) => {
    const currentSubmission = get(currentSubmissionAtom);
    if (!currentSubmission) return [];

    const questionList =
      currentSubmission.questions?.reduce(
        (result: { [key: string]: IQuestionByGroupType }, item: IQuestion) => {
          const questionGroup = item.question_group as IQuestionGroup;
          const questionGroupResult = result[questionGroup._id];

          if (questionGroupResult) {
            return {
              ...result,
              [questionGroup._id]: {
                ...questionGroupResult,
                questions: [...questionGroupResult.questions, item],
              },
            };
          }

          return {
            [questionGroup._id]: {
              ...questionGroup,
              questions: [item],
            },
          };
        },
        {}
      ) || {};
    return Object.values(questionList);
  },
});
