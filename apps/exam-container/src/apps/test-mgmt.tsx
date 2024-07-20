// eslint-disable-next-line import/no-unresolved
import { mount } from '@testMgmt/app';

import { BaseModule } from '@/components';
import { AppRouteBasePaths } from '@/routing';

const TestMgmtApp = () => {
  return (
    <BaseModule
      mount={mount}
      appBaseSuffix={AppRouteBasePaths.mgmt}
      appBaseName={AppRouteBasePaths.mgmt}
    />
  );
};

export default TestMgmtApp;
