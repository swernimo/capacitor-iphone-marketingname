package com.theblindsqrl.plugins.capacitormarketingname;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MarketingName")
public class MarketingNamePlugin extends Plugin {

    private MarketingName implementation = new MarketingName();

    @PluginMethod
    public void getMarketingName(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.getMarketingName());
        call.resolve(ret);
    }
}
