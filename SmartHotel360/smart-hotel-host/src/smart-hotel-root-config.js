import { registerApplication, start } from 'single-spa';

import './index.css';

registerApplication({
  name: '@smart-hotel/auth',
  app: () => System.import('@smart-hotel/auth'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@smart-hotel/container',
  app: () => System.import('@smart-hotel/container'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@smart-hotel/navbar',
  app: () => System.import('@smart-hotel/navbar'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
