import { setAdminPassword } from '../actions/setAdminPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { taskId } from '../utils'

export const watchAdminPassword = sdk.setupOnInit(async (effects) => {
  if (await storeJson.read((s) => s.adminPassword).const(effects)) {
    await sdk.action.clearTask(effects, taskId(setAdminPassword))
    return
  }

  await sdk.action.createOwnTask(effects, setAdminPassword, 'important', {
    reason: i18n(
      'Set a password to reach the Collabora admin console. Editing works without it; the console stays switched off until you do.',
    ),
  })
})
