import Foundation
import UIKit

@objc public class MarketingName: NSObject {
  @objc public func getMarketingName() -> String {
        return "\(UIDevice().type)"
    }
}
