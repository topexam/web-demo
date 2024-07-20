import { Icon, Button, HStack } from '@chakra-ui/react';
import { EBreakpoint, Grid, GridItem } from 'react-grid-container-query';
import { RiSave2Fill } from 'react-icons/ri';
import * as yup from 'yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { HeaderTabSection } from '@/components';
import { PrivacyModeFormItem, PasswordFormItem } from './form-item';

type IFormValues = {
  password: string;
  privacy_mode: string;
};

const formSchema = yup.object().shape({
  password: yup.string().length(6),
  privacy_mode: yup.string().required(),
});

export const SettingTab = () => {
  const formMethods = useForm<IFormValues>({
    resolver: yupResolver(formSchema),
    reValidateMode: 'onBlur',
  });

  const _handleSave: SubmitHandler<IFormValues> = (value) => {
    console.log(value);
  };

  return (
    <FormProvider {...formMethods}>
      <HeaderTabSection
        title="Test Settings"
        description="Manage test settings"
        footerContent={
          <HStack px={4} py={3} mt={4} justify="flex-end" bg="gray.100">
            <Button
              size="sm"
              colorScheme="blue"
              leftIcon={<Icon as={RiSave2Fill} boxSize={4} />}
              onClick={formMethods.handleSubmit(_handleSave)}
              isDisabled={!formMethods.formState.isDirty}
            >
              Save
            </Button>
          </HStack>
        }
      >
        <Grid gap={EBreakpoint.sm}>
          <GridItem>
            <PasswordFormItem />
          </GridItem>
          <GridItem>
            <PrivacyModeFormItem />
          </GridItem>
        </Grid>
      </HeaderTabSection>
    </FormProvider>
  );
};
