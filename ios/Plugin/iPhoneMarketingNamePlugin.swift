import Foundation
import Capacitor
import UIKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(iPhoneMarketingNamePlugin)
public class iPhoneMarketingNamePlugin: CAPPlugin {
    private let implementation = iPhoneMarketingName()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value) + " from iOS"
        ])
    }
    
    @objc func getMarketingName(_ call: CAPPluginCall) {
        call.resolve([
            "marketingName": "\(UIDevice().type)"
        ])
    }
}

/**
 

 */
