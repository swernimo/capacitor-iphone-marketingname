import { WebPlugin } from '@capacitor/core';

import type { MarketingNamePlugin } from './definitions';

export class MarketingNameWeb extends WebPlugin implements MarketingNamePlugin {
  async getMarketingName(): Promise<{ value: string }> {
    return {
      value: 'Web'
    };
  }
}
