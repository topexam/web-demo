import { createRoot } from 'react-dom/client';

import { App } from '@/app';
import { bootstrap } from '@/bootstrap';

import '@/styles/index.scss';

bootstrap();

const rootElm = document.querySelector('#root');
if (rootElm) {
  const root = createRoot(rootElm);
  root.render(<App />);
}

export {};
