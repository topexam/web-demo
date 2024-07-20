import { Controller, useFormContext } from 'react-hook-form';

import UploaderContent from './uploader-content';

export const FEATURED_IMAGE_FORM_ITEM_NAME = 'thumbnail';

export const FeaturedImageFormItem = () => {
  const formMethods = useFormContext();

  return (
    <Controller
      name={FEATURED_IMAGE_FORM_ITEM_NAME}
      control={formMethods.control}
      render={({ field }) => <UploaderContent formField={field} />}
    />
  );
};
