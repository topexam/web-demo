import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { RiCoinFill } from 'react-icons/ri';

const PRICE_FORM_ITEM_NAME = 'price';

export const PriceFormItem = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={PRICE_FORM_ITEM_NAME}
      render={({ field, fieldState }) => {
        const fieldValue = field.value;
        const fieldError = fieldState.error;
        return (
          <FormControl id={PRICE_FORM_ITEM_NAME} isRequired isInvalid={!!fieldError}>
            <FormLabel>Price</FormLabel>
            <InputGroup w="100%">
              <NumberInput
                w="100%"
                min={0}
                value={fieldValue ?? undefined}
                onChange={(_, valNum) => field.onChange(valNum)}
              >
                <NumberInputField placeholder="Price" />
              </NumberInput>
              <InputRightElement>
                <Icon as={RiCoinFill} color="yellow.500" boxSize={5} />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
