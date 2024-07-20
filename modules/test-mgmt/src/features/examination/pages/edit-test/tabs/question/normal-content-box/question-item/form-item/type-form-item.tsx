import {
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  MenuGroup,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  RiArrowDownCircleFill,
  RiArrowDownSFill,
  RiCheckboxMultipleFill,
  RiEditFill,
  RiRadioButtonLine,
} from 'react-icons/ri';
import { EQuestionType } from '@topexam/web.lib.foundation';

const QUESTION_TYPE_LIST = [
  {
    key: EQuestionType.CHECK_LIST,
    title: 'Checklist',
    icon: RiRadioButtonLine,
  },
  {
    key: EQuestionType.MULTI_CHOICES,
    title: 'Multiple choices',
    icon: RiCheckboxMultipleFill,
  },
  {
    key: EQuestionType.DROPDOWN,
    title: 'Dropdown',
    icon: RiArrowDownCircleFill,
  },
  {
    key: EQuestionType.FILL_BLANK,
    title: 'Fill in blank',
    icon: RiEditFill,
  },
];

const QUESTION_TYPE_FORM_ITEM_NAME = 'type';

export const QuestionTypeFormItem = () => {
  const { control } = useFormContext();
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Controller
      name={QUESTION_TYPE_FORM_ITEM_NAME}
      control={control}
      render={({ field }) => {
        const fieldValue = QUESTION_TYPE_LIST.find((it) => it.key === field.value);

        return (
          <Menu onOpen={onOpen} onClose={onClose} isOpen={isOpen} isLazy>
            <MenuButton
              as={Button}
              size="sm"
              color="gray.600"
              leftIcon={<Icon as={fieldValue?.icon} boxSize={4} />}
              rightIcon={<Icon as={RiArrowDownSFill} boxSize={4} />}
            >
              {fieldValue?.title}
            </MenuButton>
            <MenuList>
              <MenuGroup title="Select Type">
                {QUESTION_TYPE_LIST.map((it) => {
                  const isSelected = fieldValue?.key === it.key;
                  return (
                    <MenuItem
                      key={it.key}
                      icon={<Icon as={it.icon} boxSize={4} />}
                      bg={isSelected ? 'gray.100' : 'transparent'}
                      onClick={() => field.onChange(it.key)}
                    >
                      {it.title}
                    </MenuItem>
                  );
                })}
              </MenuGroup>
            </MenuList>
          </Menu>
        );
      }}
    />
  );
};
