export interface iPhoneMarketingNamePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getMarketingName(): Promise<{
        marketingName: string;
    }>;
}