import { utils } from '@start9labs/start-sdk'
import { manifest } from './manifest'

export const coolPort = 9980
export const coolHostId = 'main'

// Collabora's admin console has no user database — the single account is the
// `username`/`password` pair coolwsd reads from its environment at startup.
export const adminUsername = 'admin'
export const ADMIN_CONSOLE_PATH = '/browser/dist/admin/admin.html'

// Nextcloud is the only WOPI host this package is built to serve. Read rather
// than depended on: Nextcloud declares the dependency in the other direction,
// and declaring it here too would close a cycle.
export const nextcloudId = 'nextcloud'
export const nextcloudHostId = 'main'
export const nextcloudPort = 80

export const getPassword = () =>
  utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 32 })

export const taskId = (action: { id: string }) => `${manifest.id}:${action.id}`
