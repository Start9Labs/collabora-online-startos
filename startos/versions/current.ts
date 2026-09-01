import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.3:1',
  releaseNotes: {
    en_US: `The admin console is gone, and with it the password that reached it. Collabora now has no settings of its own at all: install it, pick it in Nextcloud’s **Office Suite** action, and Nextcloud does the rest.

The console only ever showed which documents were open and how much memory they were using, and reaching it meant carrying a password over from this service to a Nextcloud address. Editing is unaffected.`,
    es_ES: `La consola de administración ha desaparecido, y con ella la contraseña que daba acceso. Collabora ya no tiene ningún ajuste propio: instálelo, elíjalo en la acción **Suite ofimática** de Nextcloud y Nextcloud hace el resto.

La consola solo mostraba qué documentos estaban abiertos y cuánta memoria usaban, y llegar hasta ella exigía llevar una contraseña desde este servicio hasta una dirección de Nextcloud. La edición no se ve afectada.`,
    de_DE: `Die Administrationskonsole ist entfallen, und mit ihr das Passwort, das zu ihr führte. Collabora hat jetzt gar keine eigenen Einstellungen mehr: installieren, in Nextclouds Aktion **Office-Suite** auswählen — den Rest erledigt Nextcloud.

Die Konsole zeigte nur, welche Dokumente geöffnet waren und wie viel Speicher sie belegten, und der Weg dorthin führte über ein Passwort, das von diesem Dienst zu einer Nextcloud-Adresse getragen werden musste. Das Bearbeiten ändert sich nicht.`,
    pl_PL: `Konsola administracyjna zniknęła, a wraz z nią hasło, które do niej prowadziło. Collabora nie ma już żadnych własnych ustawień: zainstaluj ją, wskaż w akcji **Pakiet biurowy** w Nextcloud, a resztą zajmie się Nextcloud.

Konsola pokazywała jedynie, które dokumenty są otwarte i ile pamięci zajmują, a dotarcie do niej wymagało przeniesienia hasła z tej usługi pod adres Nextcloud. Edycja pozostaje bez zmian.`,
    fr_FR: `La console d'administration a disparu, et avec elle le mot de passe qui y menait. Collabora n'a désormais plus aucun réglage propre : installez-le, choisissez-le dans l'action **Suite bureautique** de Nextcloud, et Nextcloud fait le reste.

La console ne montrait que les documents ouverts et la mémoire qu'ils utilisaient, et y accéder supposait de reporter un mot de passe depuis ce service vers une adresse Nextcloud. L'édition n'est pas affectée.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
