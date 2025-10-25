import type { WebPlugin } from '@capacitor/core'
import { registerPlugin } from '@capacitor/core'

const proxy = registerPlugin<WebPlugin>('IosSilentNotifications', {
  web: async () => {
    const module = await import('./plugin')
    return new module.IosSilentNotifications()
  },
  ios: async () => {
    const module = await import('./plugin')
    return new module.IosSilentNotifications()
  },
  android: async () => {
    const module = await import('./plugin')
    return new module.IosSilentNotifications()
  },
})

export { proxy as IosSilentNotifications }
