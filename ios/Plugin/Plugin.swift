import Capacitor

@objc(IosSilentNotifications)
public class IosSilentNotifications: CAPPlugin, CAPBridgedPlugin {
  public let identifier = "IosSilentNotifications"
  public let jsName = "IosSilentNotifications"
  public let pluginMethods: [CAPPluginMethod] = []

  override public func load() {
    NotificationCenter.default.addObserver(
      forName: Notification.Name("silentNotification"),
      object: nil,
      queue: OperationQueue.main,
      using: { notification in
        if let userInfo = notification.object as? [AnyHashable: Any] {
          self.notifyListeners("onSilentNotification", data: ["data": userInfo])
        }
      }
    )
  }
}
