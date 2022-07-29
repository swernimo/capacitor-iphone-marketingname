import { WebPlugin } from '@capacitor/core';
import type { MarketingNamePlugin } from './definitions';
export declare class MarketingNameWeb extends WebPlugin implements MarketingNamePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
