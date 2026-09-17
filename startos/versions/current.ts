import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.4:0',
  releaseNotes: {
    en_US:
      'Updated Collabora Online to 26.04.4. Full release notes: https://www.collaboraonline.com/code-26-04-release-notes/',
    es_ES:
      'Collabora Online se ha actualizado a la versión 26.04.4. Notas completas de la versión: https://www.collaboraonline.com/code-26-04-release-notes/',
    de_DE:
      'Collabora Online wurde auf Version 26.04.4 aktualisiert. Vollständige Versionshinweise: https://www.collaboraonline.com/code-26-04-release-notes/',
    pl_PL:
      'Zaktualizowano Collabora Online do wersji 26.04.4. Pełne informacje o wydaniu: https://www.collaboraonline.com/code-26-04-release-notes/',
    fr_FR:
      'Collabora Online a été mis à jour vers la version 26.04.4. Notes de version complètes : https://www.collaboraonline.com/code-26-04-release-notes/',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
