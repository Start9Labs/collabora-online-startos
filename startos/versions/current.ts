import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.6.1.1:0',
  releaseNotes: {
    en_US:
      'Updated Collabora Online to 26.04.6.1.1. Adds drag-and-drop for Writer text selections and fixes crashes when pasting into Impress notes and clipboard failures after key rotation. Requires StartOS 0.4.1 or later. Upstream changes: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.5-2...cp-26.04.6-1',
    es_ES:
      'Collabora Online se ha actualizado a la versión 26.04.6.1.1. Permite arrastrar y soltar texto seleccionado en Writer y corrige cierres inesperados al pegar en las notas de Impress y fallos del portapapeles tras la rotación de claves. Requiere StartOS 0.4.1 o posterior. Cambios del proyecto original: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.5-2...cp-26.04.6-1',
    de_DE:
      'Collabora Online wurde auf Version 26.04.6.1.1 aktualisiert. Ermöglicht das Verschieben ausgewählter Texte per Drag-and-drop in Writer und behebt Abstürze beim Einfügen in Impress-Notizen sowie Zwischenablagefehler nach einem Schlüsselwechsel. Erfordert StartOS 0.4.1 oder neuer. Änderungen im Ursprungsprojekt: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.5-2...cp-26.04.6-1',
    pl_PL:
      'Zaktualizowano Collabora Online do wersji 26.04.6.1.1. Dodano przeciąganie zaznaczonego tekstu w Writer i naprawiono awarie podczas wklejania do notatek Impress oraz błędy schowka po rotacji klucza. Wymaga StartOS 0.4.1 lub nowszego. Zmiany w projekcie źródłowym: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.5-2...cp-26.04.6-1',
    fr_FR:
      'Collabora Online a été mis à jour vers la version 26.04.6.1.1. Ajoute le glisser-déposer du texte sélectionné dans Writer et corrige les plantages lors du collage dans les notes Impress ainsi que les échecs du presse-papiers après la rotation des clés. Nécessite StartOS 0.4.1 ou ultérieur. Modifications du projet amont : https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.5-2...cp-26.04.6-1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
