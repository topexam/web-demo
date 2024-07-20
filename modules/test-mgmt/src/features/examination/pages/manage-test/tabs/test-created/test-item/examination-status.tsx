import { Tag } from '@chakra-ui/react';
import { EExaminationStatus } from '@topexam/web.lib.foundation';

type Props = {
  status: EExaminationStatus;
};

const STATUS_COLOR = {
  [EExaminationStatus.DRAFT]: 'red',
  [EExaminationStatus.PUBLIC]: 'green',
};

const ExaminationStatus = ({ status }: Props) => {
  return (
    <Tag colorScheme={STATUS_COLOR[status] || 'gray'} size="sm">
      {status}
    </Tag>
  );
};

export default ExaminationStatus;
