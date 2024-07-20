import { createRoot } from 'react-dom/client';
import { IMountFn, RootDataContext } from '@topexam/web.lib.util';

// // eslint-disable-next-line import/no-unresolved
// import { ContainerWrapper } from '@container/ContainerWrapper';

import { Root } from '@/root';
import { AppRouter } from '@/routing';
import { bootstrap } from '@/bootstrap';

const mount: IMountFn = (
  el,
  { routingStrategy, initialPathname, authUser, queryClient, onExternalNavigate }
) => {
  bootstrap();
  const root = createRoot(el);
  root.render(
    <RootDataContext.Provider value={{ onExternalNavigate }}>
      <Root authUser={authUser} queryClient={queryClient}>
        <AppRouter routingStrategy={routingStrategy} initialPathname={initialPathname} />
      </Root>
    </RootDataContext.Provider>
  );

  return () => queueMicrotask(() => root.unmount());
};

// if (process.env.NODE_ENV === 'development') {
//   const devRoot = createRoot(document.getElementById('dev-root') as HTMLElement);
//   devRoot.render(
//     <ContainerWrapper mount={mount} appBaseSuffix="" appBaseName="explore" requiredAuth={false} />
//   );
// }

export { mount };
