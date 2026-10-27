import { FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const proofKey = FileHelper.string({
  base: sdk.volumes.main,
  subpath: 'proof_key',
})
