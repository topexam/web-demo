import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  HStack,
  VStack,
  Button,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MultipleSelectFormField, SingleGroupSelectFormField } from '@topexam/web.lib.form';
import { genSlugFromData } from '@topexam/web.lib.util';
import { ITag, ISubCategory, ICategory } from '@topexam/web.lib.foundation';

import { TimeFormItem, PriceFormItem, FeaturedImageFormItem } from '@/components';
import {
  createTagRequest,
  fetchSubCategoryListRequest,
  fetchTagListRequest,
  useCreateExamination,
} from '@/features/examination/api';

const SUB_CATEGORY_FORM_FIELD_NAME = 'sub_category';
const TAGS_FORM_FIELD_NAME = 'tags';

export type IFormValues = {
  title: string;
  time: number;
  price: number;
  sub_category: string;
  tags?: string[];
  description?: string;
  thumbnail?: string;
};

const formSchema = yup.object().shape({
  title: yup.string().required(),
  time: yup.number().min(1).required(),
  price: yup.number().min(0).required(),
  sub_category: yup.string().required(),
  tags: yup.array().of(yup.string()),
  description: yup.string(),
  thumbnail: yup.string(),
});

type Props = {
  onClose: () => void;
};

const FormContent = ({ onClose }: Props) => {
  const formMethods = useForm<IFormValues>({
    resolver: yupResolver(formSchema),
    reValidateMode: 'onBlur',
  });

  const createExaminationMutation = useCreateExamination();

  const _handleCreate: SubmitHandler<IFormValues> = (data) => {
    createExaminationMutation.mutate(
      {
        payload: {
          title: data.title,
          time: data.time,
          price: data.price,
          sub_category_id: data.sub_category,
          tag_ids: data.tags || [],
          description: data.description,
          thumbnail: data.thumbnail,
        },
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  const {
    formState: { errors, isDirty },
  } = formMethods;

  return (
    <>
      <DrawerBody>
        <FormProvider {...formMethods}>
          <VStack>
            <FormControl id="title" isRequired isInvalid={!!errors.title}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" {...formMethods.register('title')} />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
            <TimeFormItem />
            <PriceFormItem />
            <SingleGroupSelectFormField<ISubCategory, ICategory>
              label="Sub Category"
              name={SUB_CATEGORY_FORM_FIELD_NAME}
              queryFnFilterKey="_id"
              queryFnProps={{
                q: '',
              }}
              queryFn={async (queryFnProps) => {
                const result = await fetchSubCategoryListRequest(queryFnProps);
                return result.data;
              }}
              selectOptionTransformFn={(item) => ({
                value: item._id,
                label: item.name,
                raw: item,
              })}
              groupOptionTransformFn={(item) => ({
                value: item.group?._id,
                label: item.group?.name,
                options: item.items.map((e) => ({
                  value: e._id,
                  label: e.name,
                  raw: e,
                })),
              })}
              groupInfoFn={(item) => ({
                key: item.category_id,
                data: item.category,
              })}
              allowCreating={false}
            />
            <MultipleSelectFormField<ITag>
              label="Tags"
              name={TAGS_FORM_FIELD_NAME}
              queryFnFilterKey="_id"
              queryFnProps={{
                q: '',
              }}
              queryFn={async (queryFnProps) => {
                const result = await fetchTagListRequest(queryFnProps);
                return result.data;
              }}
              mutationFn={(mutationFnProps) =>
                createTagRequest({
                  payload: {
                    name: mutationFnProps.inputValue,
                    slug: genSlugFromData(mutationFnProps.inputValue),
                  },
                })
              }
              selectOptionTransformFn={(item) => ({
                value: item._id,
                label: item.name,
              })}
              allowCreating={true}
            />
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Description" {...formMethods.register('description')} />
            </FormControl>
            <FeaturedImageFormItem />
          </VStack>
        </FormProvider>
      </DrawerBody>
      <DrawerFooter bg="gray.100">
        <HStack justify="flex-end">
          <Button
            colorScheme="green"
            onClick={formMethods.handleSubmit(_handleCreate)}
            isLoading={createExaminationMutation.isPending}
            isDisabled={!isDirty}
            _focus={{}}
          >
            Create
          </Button>
        </HStack>
      </DrawerFooter>
    </>
  );
};

export default FormContent;
