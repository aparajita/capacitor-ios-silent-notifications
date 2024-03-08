# capacitor-ios-silent-notifications

This plugin for [Capacitor 5+](https://capacitorjs.com) provides support for silent (data only) notifications on iOS.

## Installation

```sh
pnpm add @aparajita/capacitor-ios-silent-notifications # npm install, yarn add
```

Not using [pnpm](https://pnpm.js.org/)? You owe it to yourself to give it a try. It’s faster, better with monorepos, and uses _way, way_ less disk space than the alternatives.

> This plugin assumes you have already [configured your app for push notifications](https://capacitorjs.com/docs/apis/push-notifications).

## Usage

There are two small steps to using this plugin:

### 1. Add a listener in your app

Add the following code during your app’s initialization:

```typescript
import { IosSilentNotifications } from '@aparajita/capacitor-ios-silent-notifications'

// `const { remove }` is optional. If you are never going to remove the listener,
// you can omit it.
const { remove } = await IosSilentNotifications.addListener(
  'onSilentNotification',
  (notification: Notification) => {
    // Do something with the notification
  },
)
```

Note that on Android, this plugin does nothing, since the same functionality is already provided by the `@capacitor/push-notifications` plugin. If you wish, you can skip the call to `addListener` on Android:

```typescript
if (Capacitor.getPlatform() === 'ios') {
  await IosSilentNotifications.addListener(
    'onSilentNotification',
    (notification: Notification) => {
      // Do something with the notification
    },
  )
}
```

#### 2. Forward the notification to the plugin

In your app’s `AppDelegate.swift` file, add the following code to the `AppDelegate` class:

```swift
  func application(_ application: UIApplication,
                   didReceiveRemoteNotification userInfo: [AnyHashable: Any],
                   fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    NotificationCenter.default.post(name:Notification.Name("silentNotification"), object: userInfo);
    completionHandler(UIBackgroundFetchResult.newData)
  }
```
