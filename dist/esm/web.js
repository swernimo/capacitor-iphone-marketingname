import { WebPlugin } from '@capacitor/core';
export class iPhoneMarketingNameWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async getMarketingName() {
        return Promise.reject('get marketing name not implemented for web');
    }
}
//# sourceMappingURL=web.js.map