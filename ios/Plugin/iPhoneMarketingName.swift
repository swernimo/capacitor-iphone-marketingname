import Foundation
import UIKit

@objc public class iPhoneMarketingName: NSObject {
    @objc public func echo(_ value: String) -> String {
        return value
    }
    
    @objc public func getMarketingName() -> String {
        return "\(UIDevice().type)"
    }
}
