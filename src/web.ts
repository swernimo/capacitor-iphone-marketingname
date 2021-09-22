import { WebPlugin } from '@capacitor/core';

import type { iPhoneMarketingNamePlugin } from './definitions';

export class iPhoneMarketingNameWeb extends WebPlugin implements iPhoneMarketingNamePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getMarketingName(): Promise<{ marketingName: string}> {
     return Promise.reject('get marketing name not implemented for web');
  }
}
