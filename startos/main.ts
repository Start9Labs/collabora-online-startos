import { i18n } from './i18n'
import { sdk } from './sdk'
import {
  coolHostId,
  coolPort,
  nextcloudHostId,
  nextcloudId,
  nextcloudPort,
} from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting Collabora Online')

  // Both bindings use `protocol: 'http'`, which publishes a plaintext and a
  // TLS address, so each read has to say which one it wants.
  const ownAddress = await sdk.host
    .getBridgeAddress(effects, {
      hostId: coolHostId,
      internalPort: coolPort,
      ssl: false,
    })
    .const()

  // The WOPI host Collabora will be asked to serve: Nextcloud reaches us over
  // the bridge and hands us its own bridge address as the document source.
  const nextcloudAddress = await sdk.host
    .getBridgeAddress(effects, {
      hostId: nextcloudHostId,
      packageId: nextcloudId,
      internalPort: nextcloudPort,
      ssl: false,
    })
    .const()

  const env: Record<string, string> = {
    DONT_GEN_SSL_CERT: '1',
    extra_params: [
      '--o:ssl.enable=false',
      '--o:ssl.termination=true',
      // Upstream ships the admin console on with no credentials configured.
      // Nothing here serves it, so it stays off rather than open.
      '--o:admin_console.enable=false',
    ].join(' '),
  }
  // `server_name` is deliberately left unset. Nextcloud rewrites the absolute
  // URLs out of the discovery document, so what coolwsd derives per request is
  // discarded — and setting it would pin the editor to one address.
  if (nextcloudAddress) env.aliasgroup1 = `http://${nextcloudAddress}`

  return sdk.Daemons.of(effects).addDaemon('cool', {
    subcontainer: sdk.SubContainer.of(
      effects,
      { imageId: 'collabora' },
      sdk.Mounts.of(),
      'cool',
    ),
    exec: { command: sdk.useEntrypoint(), env },
    ready: {
      display: i18n('Editor'),
      fn: () =>
        ownAddress
          ? sdk.healthCheck.checkWebUrl(
              effects,
              `http://${ownAddress}/hosting/capabilities`,
              {
                successMessage: i18n('Ready to edit documents'),
                errorMessage: i18n('Not ready to edit documents'),
              },
            )
          : Promise.resolve({
              result: 'starting' as const,
              message: i18n('Not ready to edit documents'),
            }),
      // coolwsd preloads fonts, icons, dictionaries and the break iterator and
      // forks its first kit before it binds the port — 10-20s on this hardware,
      // longer on a cold cache. Without this the check reports a hard failure
      // on every ordinary start.
      gracePeriod: 120_000,
    },
    requires: [],
  })
})
