export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  Editor: 0,
  'Ready to edit documents': 1,
  'Not ready to edit documents': 2,

  // actions/setAdminPassword.ts
  'Set Admin Password': 3,
  'Generate a new password for the Collabora admin console, where you can see open documents and memory use. Run it again at any time to replace the password. It is shown once, here.': 4,
  'Admin Console Credentials': 5,
  'Save this password now — it is not shown again. The console is served by Nextcloud: add the path below to whichever Nextcloud address you are using.': 6,
  Username: 7,
  Password: 8,
  Path: 9,

  // init/watchAdminPassword.ts
  'Set a password to reach the Collabora admin console. Editing works without it; the console stays switched off until you do.': 10,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
