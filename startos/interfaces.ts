import { sdk } from './sdk'
import { coolHostId, coolPort } from './utils'

// Bound but never exported: the editor reaches browsers through Nextcloud's own
// origin, and an address of our own would serve a console whose absolute links
// point at `server_name`.
export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  await sdk.MultiHost.of(effects, coolHostId).bindPort(coolPort, {
    protocol: 'http',
  })
  return []
})
