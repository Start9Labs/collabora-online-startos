import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.4.2.1:0',
  releaseNotes: {
    en_US:
      'Updated Collabora Online to 26.04.4.2.1. Adds slide-note views in Impress and fixes XLSX pivot-table exports that could crash Excel. Full release notes: https://www.collaboraonline.com/code-26-04-release-notes/',
    es_ES:
      'Collabora Online se ha actualizado a la versión 26.04.4.2.1. Añade vistas de notas de diapositivas en Impress y corrige exportaciones de tablas dinámicas XLSX que podían provocar fallos en Excel. Notas completas de la versión: https://www.collaboraonline.com/code-26-04-release-notes/',
    de_DE:
      'Collabora Online wurde auf Version 26.04.4.2.1 aktualisiert. Fügt Ansichten für Foliennotizen in Impress hinzu und behebt XLSX-Pivot-Tabellenexporte, die Excel zum Absturz bringen konnten. Vollständige Versionshinweise: https://www.collaboraonline.com/code-26-04-release-notes/',
    pl_PL:
      'Zaktualizowano Collabora Online do wersji 26.04.4.2.1. Dodano widoki notatek slajdów w Impress i poprawiono eksport tabel przestawnych XLSX, który mógł powodować awarie Excela. Pełne informacje o wydaniu: https://www.collaboraonline.com/code-26-04-release-notes/',
    fr_FR:
      'Collabora Online a été mis à jour vers la version 26.04.4.2.1. Ajoute des vues des notes de diapositives dans Impress et corrige les exports de tableaux croisés dynamiques XLSX pouvant faire planter Excel. Notes de version complètes : https://www.collaboraonline.com/code-26-04-release-notes/',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
