import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.4.5.2.1:1',
  releaseNotes: {
    en_US:
      'Fixes Collabora Online failing to start after updating to 26.4.5.2.1:0.',
    es_ES:
      'Corrige que Collabora Online no se iniciara tras actualizar a 26.4.5.2.1:0.',
    de_DE:
      'Behebt, dass Collabora Online nach dem Update auf 26.4.5.2.1:0 nicht startete.',
    pl_PL:
      'Naprawiono problem z uruchamianiem Collabora Online po aktualizacji do wersji 26.4.5.2.1:0.',
    fr_FR:
      'Corrige l’échec du démarrage de Collabora Online après la mise à jour vers 26.4.5.2.1:0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
