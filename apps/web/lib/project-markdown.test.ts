import assert from 'node:assert/strict'
import test from 'node:test'
import { renderProjectMarkdown } from './project-markdown'

test('removes executable HTML, event handlers, and unsafe link protocols', async () => {
  const html = await renderProjectMarkdown([
    '<script>alert(1)</script>',
    '<img src="x" onerror="alert(2)">',
    '[unsafe](javascript:alert(3))',
    '[safe](https://example.com)',
  ].join('\n\n'))

  assert.doesNotMatch(html, /<script|alert\(/i)
  assert.doesNotMatch(html, /onerror/i)
  assert.doesNotMatch(html, /javascript:/i)
  assert.match(html, /href="https:\/\/example\.com"/)
})
