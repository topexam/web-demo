import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  fileUrl: string | null;
};

const PreviewBox = ({ fileUrl }: Props) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <Document file={fileUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} className="border border-t-0" />
      ))}
    </Document>
  );
};

export default PreviewBox;
