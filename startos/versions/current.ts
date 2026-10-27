import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.5.2.1:2',
  releaseNotes: {
    en_US:
      'Collabora Online now signs its requests to Nextcloud, so Nextcloud can verify they come from this server. Updated the StartOS SDK to 3.1.1.',
    es_ES:
      'Collabora Online ahora firma sus solicitudes a Nextcloud, para que Nextcloud pueda verificar que proceden de este servidor. Actualizado el SDK de StartOS a 3.1.1.',
    de_DE:
      'Collabora Online signiert jetzt seine Anfragen an Nextcloud, sodass Nextcloud prüfen kann, dass sie von diesem Server stammen. StartOS-SDK auf 3.1.1 aktualisiert.',
    pl_PL:
      'Collabora Online podpisuje teraz swoje żądania do Nextcloud, dzięki czemu Nextcloud może sprawdzić, że pochodzą z tego serwera. Zaktualizowano SDK StartOS do 3.1.1.',
    fr_FR:
      'Collabora Online signe désormais ses requêtes vers Nextcloud, afin que Nextcloud puisse vérifier qu’elles proviennent de ce serveur. Mise à jour du SDK StartOS vers 3.1.1.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
