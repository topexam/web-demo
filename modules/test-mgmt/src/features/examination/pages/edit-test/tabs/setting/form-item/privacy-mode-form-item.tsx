import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { Select } from 'chakra-react-select';

const PRIVACY_MODE_FORM_ITEM_NAME = 'privacy_mode';

const PRIVACY_MODE_LIST = [
  {
    key: 'PUBLIC',
    title: 'Public',
  },
  {
    key: 'INVITED_USER',
    title: 'Invited User',
  },
  {
    key: 'PRIVATE',
    title: 'Private',
  },
];

export const PrivacyModeFormItem = () => {
  const { control } = useFormContext();

  const selectOptions = PRIVACY_MODE_LIST?.map((it) => ({ label: it.title, value: it.key }));
  return (
    <Controller
      name={PRIVACY_MODE_FORM_ITEM_NAME}
      control={control}
      render={({ field, fieldState }) => {
        const fieldValue = selectOptions?.find((it) => it.value === field.value);
        const fieldError = fieldState.error;

        return (
          <FormControl id={PRIVACY_MODE_FORM_ITEM_NAME} isRequired isInvalid={!!fieldError}>
            <FormLabel>Privacy Mode</FormLabel>
            <Select
              placeholder="Select..."
              options={selectOptions}
              value={fieldValue}
              onChange={(item) => field.onChange(item?.value)}
            />
            <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
