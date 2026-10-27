import { generateKeyPairSync } from 'node:crypto'
import { chmod, chown } from 'node:fs/promises'
import { proofKey } from '../fileModels/proof_key'
import { sdk } from '../sdk'

// Nextcloud caches the public half from discovery, so the key is generated once and kept.
export const seedProofKey = sdk.setupOnInit(async (effects) => {
  if ((await proofKey.read().once()) !== null) return
  await proofKey.write(
    effects,
    generateKeyPairSync('rsa', {
      modulusLength: 2048,
      privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
      publicKeyEncoding: { type: 'spki', format: 'pem' },
    }).privateKey,
  )
  const path = sdk.volumes.main.subpath('proof_key')
  await chown(path, 1001, 1001)
  await chmod(path, 0o600)
})
