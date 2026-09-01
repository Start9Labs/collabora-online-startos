import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { ADMIN_CONSOLE_PATH, adminUsername, getPassword } from '../utils'

export const setAdminPassword = sdk.Action.withoutInput(
  'set-admin-password',

  async ({ effects }) => ({
    name: i18n('Set Admin Password'),
    description: i18n(
      'Generate a new password for the Collabora admin console, where you can see open documents and memory use. Run it again at any time to replace the password. It is shown once, here.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = getPassword()
    await storeJson.merge(effects, { adminPassword: password })

    return {
      version: '1',
      title: i18n('Admin Console Credentials'),
      message: i18n(
        'Save this password now — it is not shown again. The console is served by Nextcloud: add the path below to whichever Nextcloud address you are using.',
      ),
      result: {
        type: 'group',
        value: [
          {
            type: 'single',
            name: i18n('Username'),
            description: null,
            value: adminUsername,
            masked: false,
            copyable: true,
            qr: false,
          },
          {
            type: 'single',
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
          },
          {
            type: 'single',
            name: i18n('Path'),
            description: null,
            value: ADMIN_CONSOLE_PATH,
            masked: false,
            copyable: true,
            qr: false,
          },
        ],
      },
    }
  },
)
