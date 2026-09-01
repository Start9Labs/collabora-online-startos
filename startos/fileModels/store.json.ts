import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  adminPassword: z.string().optional().catch(undefined),
})

export type Store = z.infer<typeof shape>

export const storeJson = FileHelper.json(
  { base: sdk.volumes.startos, subpath: './store.json' },
  shape,
)
