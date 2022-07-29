import { registerPlugin } from '@capacitor/core';
const MarketingName = registerPlugin('MarketingName', {
    web: () => import('./web').then(m => new m.MarketingNameWeb()),
});
export * from './definitions';
export { MarketingName };
//# sourceMappingURL=index.js.map