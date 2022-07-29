import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(MarketingNamePlugin)
public class MarketingNamePlugin: CAPPlugin {
    private let implementation = MarketingName()

    @objc func getMarketingName(_ call: CAPPluginCall) {
        call.resolve([
            "value": "\(UIDevice().type)"
        ])
    }
}
