import { defineRailway, github, preserve, project, service } from 'railway/iac'

export default defineRailway(() => {
  const jasoncochranIo = service('jasoncochran.io', {
    source: github('strataga/jasoncochran.io', { checkSuites: false }),
    build: {
      builder: 'NIXPACKS',
      buildCommand: 'cd apps/web && npm run build',
    },
    deploy: {
      startCommand: 'cd apps/web && npm start',
    },
    replicas: { 'us-east4-eqdc4a': 1 },
    domains: ['jasoncochran.io', { domain: 'www.jasoncochran.io', port: 8080 }],
    networking: { privateNetworkEndpoint: 'jasoncochranio' },
    env: {
      ALLOWED_ORIGINS: preserve(),
      CONTACT_TO_EMAIL: preserve(),
      GMAIL_APP_PASSWORD: preserve(),
      GMAIL_USER: preserve(),
      REPLICATE_API_TOKEN: preserve(),
    },
  })

  return project('jasoncochran.io', {
    resources: [jasoncochranIo],
  })
})
