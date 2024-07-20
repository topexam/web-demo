// eslint-disable-next-line import/no-unresolved
import { mount } from '@explore/app';

import { BaseModule } from '@/components';
import { AppRouteBasePaths } from '@/routing';

const ExploreApp = () => {
  return <BaseModule mount={mount} appBaseSuffix="" appBaseName={AppRouteBasePaths.explore} />;
};

export default ExploreApp;
