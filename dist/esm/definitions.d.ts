export interface MarketingNamePlugin {
    getMarketingName(): Promise<{
        value: string;
    }>;
}
