import { sdk } from './sdk'

// Nothing to back up: Collabora renders documents that live in Nextcloud and
// keeps no state of its own between restarts.
export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.ofVolumes(),
)
