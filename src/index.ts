import { registerPlugin } from '@capacitor/core';

import type { MarketingNamePlugin } from './definitions';

const MarketingName = registerPlugin<MarketingNamePlugin>('MarketingName', {
  web: () => import('./web').then(m => new m.MarketingNameWeb()),
});

export * from './definitions';
export { MarketingName };
