// eslint-disable-next-line import/no-unresolved
import { mount } from '@submission/app';

import { BaseModule } from '@/components';
import { AppRouteBaseNames, AppRouteBasePaths } from '@/routing';

const SubmissionApp = () => {
  return (
    <BaseModule
      mount={mount}
      appBaseSuffix={AppRouteBasePaths.submission}
      appBaseName={AppRouteBaseNames.submission}
    />
  );
};

export default SubmissionApp;
