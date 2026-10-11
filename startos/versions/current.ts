import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.5.1.1:0',
  releaseNotes: {
    en_US:
      'Updated Collabora Online to 26.04.5.1.1. Fixes disappearing slide previews on mobile in landscape mode and improves scrolling to Writer comments. The Editor health check now checks document-processing readiness rather than just HTTP reachability. Updated the StartOS SDK. Upstream changes: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.4-2...cp-26.04.5-1',
    es_ES:
      'Collabora Online se ha actualizado a la versión 26.04.5.1.1. Corrige la desaparición de las vistas previas de diapositivas en móviles en modo horizontal y mejora el desplazamiento hacia los comentarios de Writer. La comprobación de estado del editor ahora verifica si puede procesar documentos, en lugar de comprobar solo la conexión HTTP. Se ha actualizado el SDK de StartOS. Cambios del proyecto original: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.4-2...cp-26.04.5-1',
    de_DE:
      'Collabora Online wurde auf Version 26.04.5.1.1 aktualisiert. Behebt verschwindende Folienvorschauen auf Mobilgeräten im Querformat und verbessert das Scrollen zu Writer-Kommentaren. Die Zustandsprüfung des Editors prüft jetzt die Bereitschaft zur Dokumentverarbeitung statt nur die HTTP-Erreichbarkeit. Das StartOS-SDK wurde aktualisiert. Änderungen im Ursprungsprojekt: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.4-2...cp-26.04.5-1',
    pl_PL:
      'Zaktualizowano Collabora Online do wersji 26.04.5.1.1. Naprawiono znikające podglądy slajdów na urządzeniach mobilnych w orientacji poziomej i poprawiono przewijanie do komentarzy w Writer. Kontrola stanu edytora sprawdza teraz gotowość do przetwarzania dokumentów, a nie tylko dostępność HTTP. Zaktualizowano SDK StartOS. Zmiany w projekcie źródłowym: https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.4-2...cp-26.04.5-1',
    fr_FR:
      'Collabora Online a été mis à jour vers la version 26.04.5.1.1. Corrige la disparition des aperçus de diapositives sur mobile en mode paysage et améliore le défilement vers les commentaires de Writer. Le contrôle de santé de l’éditeur vérifie désormais sa disponibilité pour traiter des documents, et non plus seulement sa réponse HTTP. Le SDK StartOS a été mis à jour. Modifications du projet amont : https://github.com/CollaboraOnline/online.mirror/compare/cp-26.04.4-2...cp-26.04.5-1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
