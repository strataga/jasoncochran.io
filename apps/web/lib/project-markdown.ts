import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

const sanitizeOptions: sanitizeHtml.IOptions = {
  allowedTags: [
    'a', 'blockquote', 'code', 'del', 'em', 'h2', 'h3', 'h4', 'hr', 'li',
    'ol', 'p', 'pre', 'strong', 'ul',
  ],
  allowedAttributes: {
    a: ['href', 'title'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesByTag: { a: ['http', 'https', 'mailto'] },
  allowProtocolRelative: false,
}

export async function renderProjectMarkdown(markdown: string): Promise<string> {
  const html = await marked.parse(markdown)
  return sanitizeHtml(html, sanitizeOptions)
}

