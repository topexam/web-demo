import { setupLibs } from './setup-lib';
import { setupServices } from './setup-service';

export const bootstrap = () => {
  setupServices();
  setupLibs();
};
