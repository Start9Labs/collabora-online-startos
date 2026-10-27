import { sdk } from './sdk'

// Only the WOPI proof key: documents live in Nextcloud.
export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.ofVolumes('main'),
)
