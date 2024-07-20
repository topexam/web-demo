import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  useToast,
  HStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoMdSave } from 'react-icons/io';
import { EBreakpoint, Grid, GridItem } from 'react-grid-container-query';
import { MultipleSelectFormField, SingleGroupSelectFormField } from '@topexam/web.lib.form';
import { ICategory, ISubCategory, ITag } from '@topexam/web.lib.foundation';
import { genSlugFromData, useCustomQuery } from '@topexam/web.lib.util';

import { IPageRouteParams } from '@/types';
import { TimeFormItem, PriceFormItem, FeaturedImageFormItem, HeaderTabSection } from '@/components';
import {
  createTagRequest,
  fetchExaminationItemRequest,
  fetchSubCategoryListRequest,
  fetchTagListRequest,
  updateExaminationRequest,
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

const schema = yup.object().shape({
  title: yup.string().required(),
  time: yup.number().min(1).required(),
  price: yup.number().min(0).required(),
  sub_category: yup.string().required(),
  tags: yup.array().of(yup.string()).nullable(),
  description: yup.string().nullable(),
  thumbnail: yup.string().nullable(),
});

export const InformationTab = () => {
  const params = useParams<IPageRouteParams>();
  const { slug = null } = params;

  const examinationItemQuery = useCustomQuery({
    queryKey: ['examination', slug || null],
    queryFn: () => fetchExaminationItemRequest(slug),
    enabled: !!slug,
  });

  const updateExaminationMutation = useMutation({ mutationFn: updateExaminationRequest });

  const formMethods = useForm<IFormValues>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = formMethods;

  const toast = useToast();

  useEffect(() => {
    const examinationItem = examinationItemQuery.data;
    if (examinationItem) {
      reset({
        title: examinationItem.title,
        time: examinationItem.time,
        price: examinationItem.price,
        description: examinationItem.description,
        thumbnail: examinationItem.thumbnail,
        sub_category: examinationItem.sub_category_id,
        tags: examinationItem.tag_ids,
      });
    }
  }, [examinationItemQuery.data, reset]);

  const _handleSubmit: SubmitHandler<IFormValues> = (values) => {
    updateExaminationMutation.mutate(
      {
        examinationId: slug || '',
        payload: {
          title: values.title,
          time: values.time,
          price: values.price,
          description: values.description,
          thumbnail: values.thumbnail,
          sub_category_id: values.sub_category,
          tag_ids: values.tags ?? [],
        },
      },
      {
        onSuccess: () => {
          toast({
            title: 'Examination updated',
            description: 'The test is updated success',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
          });
        },
        onError: (error) => {
          toast({
            title: 'Create examination failure!',
            description: (error as any).toString(),
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
          });
        },
      }
    );
  };

  return (
    <FormProvider {...formMethods}>
      <HeaderTabSection
        title="Test Information"
        description="Manage test information"
        footerContent={
          <HStack px={4} py={3} mt={4} justify="flex-end" bg="gray.100">
            <Button
              size="sm"
              colorScheme="blue"
              leftIcon={<Icon as={IoMdSave} boxSize={4} />}
              isLoading={updateExaminationMutation.isPending}
              isDisabled={!formMethods.formState.isDirty}
              onClick={handleSubmit(_handleSubmit)}
            >
              Save
            </Button>
          </HStack>
        }
      >
        <Grid gap={EBreakpoint.md}>
          <GridItem>
            <FormControl id="title" isRequired isInvalid={!!errors.title}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" {...register('title')} />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem sm={6}>
            <TimeFormItem />
          </GridItem>
          <GridItem sm={6}>
            <PriceFormItem />
          </GridItem>
          <GridItem sm={6}>
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
          </GridItem>
          <GridItem sm={6}>
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
          </GridItem>
          <GridItem>
            <FormControl id="description" mt={2}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Description" {...register('description')} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FeaturedImageFormItem />
          </GridItem>
        </Grid>
      </HeaderTabSection>
    </FormProvider>
  );
};
