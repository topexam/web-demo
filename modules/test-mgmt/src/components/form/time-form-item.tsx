import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

const TIME_FORM_ITEM_NAME = 'time';

export const TimeFormItem = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={TIME_FORM_ITEM_NAME}
      render={({ field, fieldState }) => {
        const fieldValue = field.value;
        const fieldError = fieldState.error;
        return (
          <FormControl id={TIME_FORM_ITEM_NAME} isRequired isInvalid={!!fieldError}>
            <FormLabel>Time</FormLabel>
            <InputGroup w="full">
              <NumberInput
                w="full"
                min={1}
                value={fieldValue || undefined}
                onChange={(_, valNum) => field.onChange(valNum)}
              >
                <NumberInputField placeholder="Time" roundedRight="none" />
              </NumberInput>
              <InputRightAddon children="minute(s)" />
            </InputGroup>
            <FormHelperText>This is time to take the examination</FormHelperText>
            <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
