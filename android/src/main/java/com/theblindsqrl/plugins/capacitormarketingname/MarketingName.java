package com.theblindsqrl.plugins.capacitormarketingname;

import android.content.Context;

import com.jaredrummler.android.device.DeviceName;

public class MarketingName {

//using the library from https://github.com/jaredrummler/AndroidDeviceNames
    public String getMarketingName(Context cxt) {
        DeviceName.init(cxt);
        String marketingName = DeviceName.getDeviceName();
        return marketingName;
    }
}
