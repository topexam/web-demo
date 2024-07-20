import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Document, Page, pdfjs } from 'react-pdf';
import { IExamination, useFileUrl } from '@topexam/web.lib.foundation';

import styles from './index.module.scss';
import { questionAnswerListAtom, useFileQuestionListByExamination } from '@/features/submission';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  examination: IExamination | null;
};

export const PDFQuestionsBox = ({ examination }: Props) => {
  const fileId = examination?.file || null;
  const fileUrl = useFileUrl({ resourceId: 'examination_id', fileId: fileId });

  const [, setQuestionAnswerList] = useRecoilState(questionAnswerListAtom);

  const questionListQuery = useFileQuestionListByExamination({
    examinationId: examination?._id || null,
  });

  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    setQuestionAnswerList(
      questionListQuery.data?.map((item) => ({ ...item, selections: [] })) ?? []
    );
  }, [questionListQuery.data, setQuestionAnswerList]);

  return (
    <Document file={fileUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} className={styles['custom-page']} />
      ))}
    </Document>
  );
};
