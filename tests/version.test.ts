import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { ExtendedVersion, Version, types } from '@start9labs/start-sdk'
import { manifest } from '../startos/manifest'
import { current } from '../startos/versions/current'
import { versionGraph } from '../startos/versions'

const packageVersion = ExtendedVersion.parse(current.options.version)

test('the package version preserves all five upstream components', () => {
  assert.equal(current.options.version, '26.4.4.2.1:0')
  assert.deepEqual(packageVersion.upstream.number, [26, 4, 4, 2, 1])
})

test('the current version has a quoted declaration for the release workflow', () => {
  const source = readFileSync('startos/versions/current.ts', 'utf8')
  assert.match(source, /version:\s*(['"])26\.4\.4\.2\.1:0\1/)
})

test('the image pin and package version identify the same upstream release', () => {
  const image = manifest.images.collabora.source.dockerTag
  assert.equal(image, 'collabora/code:26.04.4.2.1')
  const imageVersion = Version.parse(image.slice('collabora/code:'.length))
  assert.equal(imageVersion.compare(packageVersion.upstream), 'equal')
})

for (const oldVersion of [
  '26.4.3:1',
  '26.4.4:0',
  '26.4.4:999',
  '26.4.4.1.1:0',
]) {
  test(`upgrades from ${oldVersion} through the production version graph`, async () => {
    const from = ExtendedVersion.parse(oldVersion)
    assert.equal(packageVersion.compare(from), 'greater')
    assert.equal(versionGraph.canMigrateFrom().satisfiedBy(from), true)
    const writes: Array<string | null> = []
    const effects = {
      setDataVersion: async ({ version }: { version: string | null }) => {
        writes.push(version)
        return null
      },
    } as types.Effects
    const migrated = await versionGraph.migrate({
      effects,
      from,
      to: versionGraph.currentVersion(),
    })
    assert.equal(migrated.toString(), '26.4.4.2.1:0')
    assert.deepEqual(writes, ['26.4.4.2.1:0'])
    assert.equal(versionGraph.canMigrateTo().satisfiedBy(from), false)
  })
}

for (const nextVersion of ['26.4.4.3.1:0', '26.4.4.2.2:0']) {
  test(`${nextVersion} advances the upstream version rather than the wrapper revision`, () => {
    const next = ExtendedVersion.parse(nextVersion)
    assert.equal(next.upstream.compare(packageVersion.upstream), 'greater')
    assert.equal(next.downstream.compare(packageVersion.downstream), 'equal')
  })
}
