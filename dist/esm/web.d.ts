import { WebPlugin } from '@capacitor/core';
import type { iPhoneMarketingNamePlugin } from './definitions';
export declare class iPhoneMarketingNameWeb extends WebPlugin implements iPhoneMarketingNamePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getMarketingName(): Promise<{
        marketingName: string;
    }>;
}
