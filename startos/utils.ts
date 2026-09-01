export const coolPort = 9980
export const coolHostId = 'main'

// Nextcloud is the only WOPI host this package is built to serve. Read rather
// than depended on: Nextcloud declares the dependency in the other direction,
// and declaring it here too would close a cycle.
export const nextcloudId = 'nextcloud'
export const nextcloudHostId = 'main'
export const nextcloudPort = 80
