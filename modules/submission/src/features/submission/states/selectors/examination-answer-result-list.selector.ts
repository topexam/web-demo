import { selector } from 'recoil';
import { currentSubmissionAtom } from '../atoms';

type IAnswerResultType = {
  question: string;
  user_options: string[];
  answer_options: string[];
};

export const examinationAnswerResultListSelector = selector<IAnswerResultType[]>({
  key: 'examinationAnswerList',
  get: ({ get }) => {
    const currentSubmission = get(currentSubmissionAtom);
    if (!currentSubmission) return [];

    const answerResutList =
      currentSubmission.answers?.reduce<IAnswerResultType[]>((result, item, index) => {
        const userAnswer = currentSubmission.user_answers[index];
        return [
          ...result,
          {
            question: item.question,
            user_options: userAnswer.options,
            answer_options: item.options,
          },
        ];
      }, []) || [];
    return answerResutList;
  },
});
