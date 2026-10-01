export const upstreamVersion = '26.4.4.2.1'

const [year, month, ...counters] = upstreamVersion.split('.')
export const upstreamTag = `${year}.${month.padStart(2, '0')}.${counters.join('.')}`
