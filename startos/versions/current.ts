import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.5.2.1:0',
  releaseNotes: {
    en_US:
      'Updated Collabora Online to 26.04.5.2.1. Adds Review Mode with change tracking and multiple image selection in Writer, a first-use guided tour, and improved Calc table styles. Improves Office file compatibility, accessibility, and reconnection handling. Updated the StartOS SDK. Full release notes: https://www.collaboraonline.com/code-26-04-release-notes/#h-code-26-04-5-2',
    es_ES:
      'Collabora Online se ha actualizado a la versión 26.04.5.2.1. Añade un modo de revisión con control de cambios y selección múltiple de imágenes en Writer, una visita guiada inicial y mejoras en los estilos de tabla de Calc. Mejora la compatibilidad con archivos de Office, la accesibilidad y la gestión de reconexiones. Se ha actualizado el SDK de StartOS. Notas completas de la versión: https://www.collaboraonline.com/code-26-04-release-notes/#h-code-26-04-5-2',
    de_DE:
      'Collabora Online wurde auf Version 26.04.5.2.1 aktualisiert. Fügt einen Überprüfungsmodus mit Änderungsverfolgung und Mehrfachauswahl von Bildern in Writer, eine Einführungstour und verbesserte Tabellenvorlagen in Calc hinzu. Verbessert die Kompatibilität mit Office-Dateien, die Barrierefreiheit und die Wiederverbindung. Das StartOS-SDK wurde aktualisiert. Vollständige Versionshinweise: https://www.collaboraonline.com/code-26-04-release-notes/#h-code-26-04-5-2',
    pl_PL:
      'Zaktualizowano Collabora Online do wersji 26.04.5.2.1. Dodano tryb recenzji ze śledzeniem zmian i zaznaczanie wielu obrazów w Writer, przewodnik dla nowych użytkowników oraz ulepszone style tabel w Calc. Poprawiono zgodność z plikami Office, dostępność i obsługę ponownego łączenia. Zaktualizowano SDK StartOS. Pełne informacje o wydaniu: https://www.collaboraonline.com/code-26-04-release-notes/#h-code-26-04-5-2',
    fr_FR:
      'Collabora Online a été mis à jour vers la version 26.04.5.2.1. Ajoute un mode Révision avec suivi des modifications et la sélection de plusieurs images dans Writer, une visite guidée initiale et des styles de tableau améliorés dans Calc. Améliore la compatibilité avec les fichiers Office, l’accessibilité et la gestion des reconnexions. Le SDK StartOS a été mis à jour. Notes de version complètes : https://www.collaboraonline.com/code-26-04-release-notes/#h-code-26-04-5-2',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
