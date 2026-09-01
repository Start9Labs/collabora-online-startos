import { setupManifest } from '@start9labs/start-sdk'
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
      source: { dockerTag: 'collabora/code:26.04.3.2.1' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
