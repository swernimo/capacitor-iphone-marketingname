export interface MarketingNamePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
