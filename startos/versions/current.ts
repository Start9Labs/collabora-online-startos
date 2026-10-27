import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.5.2.1:2',
  releaseNotes: {
    en_US: 'Updated the StartOS SDK to 3.1.1. No change in behavior.',
    es_ES:
      'Actualizado el SDK de StartOS a 3.1.1. Sin cambios de comportamiento.',
    de_DE: 'StartOS-SDK auf 3.1.1 aktualisiert. Keine Verhaltensänderung.',
    pl_PL: 'Zaktualizowano SDK StartOS do 3.1.1. Bez zmian w działaniu.',
    fr_FR:
      'Mise à jour du SDK StartOS vers 3.1.1. Aucun changement de comportement.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
