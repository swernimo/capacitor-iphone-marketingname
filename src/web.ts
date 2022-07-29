import { WebPlugin } from '@capacitor/core';

import type { MarketingNamePlugin } from './definitions';

export class MarketingNameWeb extends WebPlugin implements MarketingNamePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
