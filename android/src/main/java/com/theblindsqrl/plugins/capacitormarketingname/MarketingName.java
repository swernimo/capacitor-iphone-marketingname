package com.theblindsqrl.plugins.capacitormarketingname;

public class MarketingName {

//using the library from https://github.com/jaredrummler/AndroidDeviceNames
    public String getMarketingName() {
        DeviceName.init(this);
        String marketingName = DeviceName.getDeviceName();
        return marketingName;
    }
}
