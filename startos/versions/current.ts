import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { upstreamVersion } from '../upstream'

export const current = VersionInfo.of({
  version: `${upstreamVersion}:0`,
  releaseNotes: {
    en_US: `Updated Collabora Online to ${upstreamVersion}. Adds slide-note views in Impress and fixes XLSX pivot-table exports that could crash Excel. Package versions now retain every upstream version component. Full release notes: https://www.collaboraonline.com/code-26-04-release-notes/`,
    es_ES: `Collabora Online se ha actualizado a la versión ${upstreamVersion}. Añade vistas de notas de diapositivas en Impress y corrige exportaciones de tablas dinámicas XLSX que podían provocar fallos en Excel. Las versiones del paquete conservan ahora todos los componentes de la versión original. Notas completas de la versión: https://www.collaboraonline.com/code-26-04-release-notes/`,
    de_DE: `Collabora Online wurde auf Version ${upstreamVersion} aktualisiert. Fügt Ansichten für Foliennotizen in Impress hinzu und behebt XLSX-Pivot-Tabellenexporte, die Excel zum Absturz bringen konnten. Paketversionen behalten jetzt alle Bestandteile der Upstream-Version bei. Vollständige Versionshinweise: https://www.collaboraonline.com/code-26-04-release-notes/`,
    pl_PL: `Zaktualizowano Collabora Online do wersji ${upstreamVersion}. Dodano widoki notatek slajdów w Impress i poprawiono eksport tabel przestawnych XLSX, który mógł powodować awarie Excela. Wersje pakietu zachowują teraz wszystkie składniki wersji źródłowej. Pełne informacje o wydaniu: https://www.collaboraonline.com/code-26-04-release-notes/`,
    fr_FR: `Collabora Online a été mis à jour vers la version ${upstreamVersion}. Ajoute des vues des notes de diapositives dans Impress et corrige les exports de tableaux croisés dynamiques XLSX pouvant faire planter Excel. Les versions du paquet conservent désormais tous les composants de la version amont. Notes de version complètes : https://www.collaboraonline.com/code-26-04-release-notes/`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
