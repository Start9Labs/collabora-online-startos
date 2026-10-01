import { setupManifest } from '@start9labs/start-sdk'
import { upstreamTag } from '../upstream'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'collabora-online',
  title: 'Collabora Online',
  license: 'MPL-2.0',
  packageRepo: 'https://github.com/Start9Labs/collabora-online-startos',
  upstreamRepo: 'https://github.com/CollaboraOnline/online',
  marketingUrl: 'https://www.collaboraonline.com',
  donationUrl: null,
  description: { short, long },
  volumes: [],
  images: {
    collabora: {
      source: { dockerTag: `collabora/code:${upstreamTag}` },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
