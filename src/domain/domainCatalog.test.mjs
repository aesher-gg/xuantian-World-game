import test from 'node:test'
import assert from 'node:assert/strict'
import catalog from '../../world-bible/generated/domain-catalog.json' with { type: 'json' }

test('operational catalog covers official world dimensions', () => {
  assert.equal(catalog.regions.length, 10)
  assert.equal(catalog.cultivation.realms.length, 9)
  assert.equal(catalog.cultivation.spiritualRoots.length, 5)
  assert.equal(catalog.professions.length, 7)
})
test('all official herb and beast records have source provenance', () => {
  assert.equal(catalog.herbCatalog.length, 200)
  assert.equal(catalog.coverage.herbCatalogComplete, true)
  assert.equal(catalog.beastCatalog.length, 344)
  for (const record of [...catalog.herbCatalog, ...catalog.beastCatalog]) {
    assert.match(record.sourceBlobSha, /^[a-f0-9]{40}$/)
    assert.ok(record.sourceLine > 0)
  }
})
test('formula registry and source policy are preserved', () => {
  assert.equal(catalog.source.repository, 'aesher-gg/Xuantian-World')
  assert.equal(catalog.source.policy, 'read-only')
  assert.equal(catalog.formulaRegistry.length, catalog.coverage.formulaCount)
  assert.ok(catalog.formulaRegistry.length >= 30)
})
