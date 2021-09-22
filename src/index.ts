import { registerPlugin } from '@capacitor/core';

import type { iPhoneMarketingNamePlugin } from './definitions';

const iPhoneMarketingName = registerPlugin<iPhoneMarketingNamePlugin>('iPhoneMarketingName', {
  web: () => import('./web').then(m => new m.iPhoneMarketingNameWeb()),
});

export * from './definitions';
export { iPhoneMarketingName };
