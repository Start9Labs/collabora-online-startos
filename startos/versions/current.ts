import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.6.2.1:0',
  releaseNotes: {
    en_US:
      'Updated Collabora Online to 26.04.6.2.1. Documents can no longer pull images and data from arbitrary hosts on your local network. Nextcloud remains an allowed source. Also fixes Ctrl+Shift+V pasting in Impress notes, undoing page style changes in Writer, and saving password-protected spreadsheets as ODS. Upstream changes: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.6-1...cp-26.04.6-2',
    es_ES:
      'Collabora Online se ha actualizado a la versión 26.04.6.2.1. Los documentos ya no pueden obtener imágenes y datos de hosts arbitrarios de tu red local. Nextcloud sigue siendo una fuente permitida. También corrige el pegado con Ctrl+Mayús+V en las notas de Impress, deshacer cambios de estilo de página en Writer y guardar hojas de cálculo protegidas con contraseña como ODS. Cambios del proyecto original: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.6-1...cp-26.04.6-2',
    de_DE:
      'Collabora Online wurde auf Version 26.04.6.2.1 aktualisiert. Dokumente können Bilder und Daten nicht mehr von beliebigen Hosts in deinem lokalen Netzwerk laden. Nextcloud bleibt als Quelle erlaubt. Außerdem behoben: Einfügen mit Strg+Umschalt+V in Impress-Notizen, Rückgängigmachen von Seitenvorlagen-Änderungen in Writer und Speichern passwortgeschützter Tabellen als ODS. Änderungen im Ursprungsprojekt: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.6-1...cp-26.04.6-2',
    pl_PL:
      'Zaktualizowano Collabora Online do wersji 26.04.6.2.1. Dokumenty nie mogą już pobierać obrazów i danych z dowolnych hostów w sieci lokalnej. Nextcloud pozostaje dozwolonym źródłem. Naprawiono też wklejanie skrótem Ctrl+Shift+V w notatkach Impress, cofanie zmian stylu strony w Writer oraz zapisywanie arkuszy chronionych hasłem w formacie ODS. Zmiany w projekcie źródłowym: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.6-1...cp-26.04.6-2',
    fr_FR:
      "Collabora Online a été mis à jour vers la version 26.04.6.2.1. Les documents ne peuvent plus récupérer des images et des données depuis des hôtes arbitraires de votre réseau local. Nextcloud reste une source autorisée. Corrige aussi le collage avec Ctrl+Maj+V dans les notes Impress, l'annulation des changements de style de page dans Writer et l'enregistrement en ODS des classeurs protégés par mot de passe. Modifications du projet amont : https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.6-1...cp-26.04.6-2",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
