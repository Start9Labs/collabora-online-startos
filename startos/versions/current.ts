import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.3:0',
  releaseNotes: {
    en_US:
      'Collabora Online for StartOS. Install it alongside Nextcloud, install the Nextcloud Office app from the Nextcloud app store, and pick your office suite in Nextcloud’s Office Suite action.',
    es_ES:
      'Collabora Online para StartOS. Instálelo junto a Nextcloud, instale la aplicación Nextcloud Office desde la tienda de aplicaciones de Nextcloud y elija su suite ofimática en la acción Suite ofimática de Nextcloud.',
    de_DE:
      'Collabora Online für StartOS. Installieren Sie es zusammen mit Nextcloud, installieren Sie die App Nextcloud Office aus dem Nextcloud App Store und wählen Sie Ihre Office-Suite in der Aktion „Office-Suite“ von Nextcloud.',
    pl_PL:
      'Collabora Online dla StartOS. Zainstaluj go obok Nextcloud, zainstaluj aplikację Nextcloud Office ze sklepu z aplikacjami Nextcloud i wybierz pakiet biurowy w akcji Pakiet biurowy w Nextcloud.',
    fr_FR:
      "Collabora Online pour StartOS. Installez-le aux côtés de Nextcloud, installez l'application Nextcloud Office depuis la boutique d'applications Nextcloud, puis choisissez votre suite bureautique dans l'action Suite bureautique de Nextcloud.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
