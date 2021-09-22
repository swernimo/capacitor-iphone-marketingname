import { registerPlugin } from '@capacitor/core';
const iPhoneMarketingName = registerPlugin('iPhoneMarketingName', {
    web: () => import('./web').then(m => new m.iPhoneMarketingNameWeb()),
});
export * from './definitions';
export { iPhoneMarketingName };
//# sourceMappingURL=index.js.map