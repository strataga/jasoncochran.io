import assert from 'node:assert/strict'
import test from 'node:test'
import {
  calculateReadingTime,
  getBlogPost,
  getRelatedPosts,
  parseBlogSource,
  type BlogPostSummary,
} from './blog'

const makePost = (slug: string, date: string, tags: string[]): BlogPostSummary => ({
  slug,
  title: slug,
  date,
  summary: `Summary for ${slug}`,
  tags,
  readingTimeMinutes: 1,
})

test('parses complete frontmatter and derives reading time', () => {
  const post = parseBlogSource(
    'architecture-decisions',
    [
      '---',
      'title: Architecture Decisions',
      'date: "2026-09-03"',
      'summary: A practical guide.',
      'seoTitle: Architecture Decisions That Hold Up',
      'seoDescription: A practical guide to architecture decisions, tradeoffs, and evidence.',
      'updated: "2026-09-04"',
      'tags: [architecture, delivery]',
      '---',
      '',
      'A concise article body.',
    ].join('\n')
  )

  assert.equal(post.title, 'Architecture Decisions')
  assert.equal(post.seoTitle, 'Architecture Decisions That Hold Up')
  assert.equal(post.updated, '2026-09-04')
  assert.deepEqual(post.tags, ['architecture', 'delivery'])
  assert.equal(post.readingTimeMinutes, 1)
})

test('rejects an updated date before the publication date', () => {
  assert.throws(
    () =>
      parseBlogSource(
        'invalid-update',
        [
          '---',
          'title: Invalid update',
          'date: "2026-09-03"',
          'updated: "2026-09-02"',
          'summary: Invalid update date.',
          'tags: [architecture]',
          '---',
          'Article body.',
        ].join('\n')
      ),
    /updated date/
  )
})

test('rejects incomplete blog metadata', () => {
  assert.throws(
    () =>
      parseBlogSource(
        'missing-summary',
        ['---', 'title: Missing summary', 'date: "2026-09-03"', 'tags: [architecture]', '---'].join(
          '\n'
        )
      ),
    /summary/
  )
})

test('rejects empty content and unsafe image paths', () => {
  assert.throws(
    () =>
      parseBlogSource(
        'empty-post',
        [
          '---',
          'title: Empty post',
          'date: "2026-09-03"',
          'summary: No article follows.',
          'tags: [architecture]',
          '---',
        ].join('\n')
      ),
    /no article content/
  )

  assert.throws(
    () =>
      parseBlogSource(
        'unsafe-image',
        [
          '---',
          'title: Unsafe image',
          'date: "2026-09-03"',
          'summary: Invalid image metadata.',
          'tags: [architecture]',
          'heroImage: "https://example.com/tracker.png"',
          'heroAlt: Tracking image',
          '---',
          'Article body.',
        ].join('\n')
      ),
    /heroImage/
  )
})

test('blocks unsafe slugs before reading the filesystem', async () => {
  assert.equal(await getBlogPost('../private-file'), null)
})

test('calculates a minimum one-minute reading time', () => {
  assert.equal(calculateReadingTime('Short post.'), 1)
  assert.equal(calculateReadingTime(Array.from({ length: 221 }, () => 'word').join(' ')), 2)
})

test('ranks shared tags first and uses recency as a fallback', () => {
  const current = makePost('current', '2026-09-03', ['architecture', 'ai'])
  const related = getRelatedPosts(
    current,
    [
      current,
      makePost('recent-fallback', '2026-09-02', ['browser']),
      makePost('older-related', '2026-01-01', ['architecture']),
      makePost('newer-related', '2026-08-01', ['AI']),
    ],
    3
  )

  assert.deepEqual(
    related.map((post) => post.slug),
    ['newer-related', 'older-related', 'recent-fallback']
  )
})
