import {
  IconButton,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { WebEditor } from 'chakra-tiptap-editor';
import { Controller, useFormContext } from 'react-hook-form';
import { RiMessage3Fill } from 'react-icons/ri';

type Props = {
  name: string;
};

const AnswerExplain = ({ name }: Props) => {
  const { control } = useFormContext();
  return (
    <Popover placement="bottom-end" isLazy>
      <PopoverTrigger>
        <IconButton
          icon={<Icon as={RiMessage3Fill} color="gray.500" boxSize={4} />}
          size="sm"
          aria-label="Explain"
          variant="ghost"
          borderWidth={1}
          borderStyle="dashed"
          borderColor="gray.300"
        />
      </PopoverTrigger>
      <PopoverContent maxW="600px" w="full">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold" borderBottomWidth={0} px={4} py={3}>
          Answer Explain
        </PopoverHeader>
        <PopoverBody p={0}>
          <Controller
            control={control}
            name={name}
            render={({ field }) => {
              const fieldValue = field.value;
              return (
                <WebEditor
                  placeholderText="Enter explain"
                  value={{ html: fieldValue }}
                  onChange={(val) => field.onChange(val.html)}
                />
              );
            }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AnswerExplain;
