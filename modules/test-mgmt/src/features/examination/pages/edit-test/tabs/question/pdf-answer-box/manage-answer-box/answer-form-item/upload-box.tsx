import { Button, Icon, Box } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { UseFieldArrayReturn } from 'react-hook-form';
import { RiUploadCloud2Fill } from 'react-icons/ri';

import { IQuestionAnswer } from '@/features/examination/types';
import { FormValues } from '../content-box';
import { ANSWERS_FORM_ITEM } from './answer-form-item';

type Props = {
  fieldArrayMethods: UseFieldArrayReturn<FormValues, typeof ANSWERS_FORM_ITEM, 'id'>;
};

const UploadBox = ({ fieldArrayMethods }: Props) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const bufferArray = reader.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json<Record<string, any>>(ws);
        const parsedAnswers = data.map<IQuestionAnswer>((it) => ({
          option_num: isNaN(parseInt(it.option_num)) ? 4 : parseInt(it.option_num),
          correct_options:
            it.correct_options
              ?.toString()
              ?.split(/\s*,\s*/)
              ?.map((opt: string) => parseInt(opt)) || [],
          explain: null,
        }));

        if (parsedAnswers.length) {
          fieldArrayMethods.replace([]);
          fieldArrayMethods.replace(parsedAnswers);
        }
      };
      reader.readAsArrayBuffer(file);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.ms-excel': ['.csv', '.xlsx', '.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.csv',
        '.xlsx',
        '.xls',
      ],
    },
    maxFiles: 1,
  });

  return (
    <Box {...getRootProps()}>
      <input {...getInputProps()} />
      <Button leftIcon={<Icon as={RiUploadCloud2Fill} boxSize={4} />} colorScheme="green" size="sm">
        Upload
      </Button>
    </Box>
  );
};

export default UploadBox;
