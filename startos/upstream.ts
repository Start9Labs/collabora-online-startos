import { upstreamVersion } from './versions/current'

const [year, month, ...counters] = upstreamVersion.split('.')
export const upstreamTag = `${year}.${month.padStart(2, '0')}.${counters.join('.')}`
