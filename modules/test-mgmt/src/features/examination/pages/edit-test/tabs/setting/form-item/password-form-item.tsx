import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

const PASSWORD_FORM_ITEM_NAME = 'password';

export const PasswordFormItem = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name={PASSWORD_FORM_ITEM_NAME}
      control={control}
      render={({ field, fieldState }) => {
        const fieldValue = field.value;
        const fieldError = fieldState.error;

        return (
          <FormControl id={PASSWORD_FORM_ITEM_NAME} isInvalid={!!fieldError}>
            <FormLabel>Password</FormLabel>
            <HStack>
              <PinInput value={fieldValue} onChange={field.onChange}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
