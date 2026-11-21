export const profile = {
  name: 'Jason Cochran',
  title: 'Senior Full Stack Developer',
  description:
    'Senior Full Stack Developer building enterprise web and mobile applications with React, Next.js, TypeScript, and Node.js. Based in Midland, Texas.',
  summary:
    'Full stack engineer building enterprise web and mobile applications with React, Next.js, TypeScript, and Node.js. Hands-on experience across user interfaces, APIs, databases, cloud deployment, and production handoff. Delivered SaaS products, modernized legacy systems, and integrated business workflows across energy, telecom, and consulting.',
  email: 'jlcochran2013@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cochranjason/',
  github: 'https://github.com/strataga',
  resumePdf: '/jason-cochran-full-stack-resume.pdf',
  resumeWord: '/jason-cochran-full-stack-resume.docx',
  coverLetterPdf: '/jason-cochran-full-stack-cover-letter.pdf',
  coverLetterWord: '/jason-cochran-full-stack-cover-letter.docx',
}

export const skillGroups = [
  {
    label: 'Frontend',
    skills: 'TypeScript, JavaScript, React, Next.js, React Native, Angular, Tailwind CSS',
  },
  {
    label: 'Backend',
    skills: 'Node.js, NestJS, Express, C#, .NET, Java, Spring Boot, REST APIs, GraphQL',
  },
  { label: 'Data', skills: 'PostgreSQL, SQL Server, MongoDB, Prisma' },
  { label: 'Cloud & delivery', skills: 'AWS, Azure, Docker, Kubernetes, Terraform, CI/CD, Jest' },
]

export const experience = [
  {
    company: 'TxMQ',
    role: 'Senior Software Engineer / Architect',
    dates: 'Sep 2026 – Present',
    details: 'Contract · Remote · Part-time, as needed',
    highlights: [
      'Develop QConsole features with Java, Spring Boot, Angular, and PostgreSQL to help customers manage and monitor enterprise IBM MQ environments.',
      'Helped design and deliver a centralized QConsole hub, consolidating visibility across distributed customer environments.',
      'Automated AWS provisioning with Terraform, strengthened CI/CD and production-like testing, and contributed to the Kubernetes migration to make deployments more repeatable.',
      'Delivered an on-premises deployment option and improved disaster-recovery readiness through failure testing, recovery procedures, and operational documentation.',
    ],
  },
  {
    company: 'Servant',
    role: 'Senior Full Stack Engineer',
    dates: 'Feb 2025 – Sep 2025',
    details: 'Contract · Remote',
    highlights: [
      'Delivered an onboarding flow with Next.js, NestJS, Prisma, and React Query; owned the production migration from the legacy workflow, documentation, and operational handoff.',
      'Built responsive forms, dashboards, assessments, and referral workflows with React, Tailwind CSS, and shadcn/ui.',
      'Implemented JWT authentication, role-based access control, and REST APIs with Swagger documentation; enforced data authorization through Prisma and ZenStack.',
      'Integrated AWS SES and SNS notifications and S3 file uploads with validation; configured Railway CI/CD across development, staging, and production.',
    ],
  },
  {
    company: 'Big D Companies',
    role: 'Senior Software Engineer',
    dates: 'Mar 2024 – Sep 2024',
    details: 'Contract · Midland, TX',
    highlights: [
      'Rebuilt a PHP-based ERP in Next.js for an oil and gas services company, reducing load times and simplifying maintenance for field operations using SCADA and PLC meter data.',
    ],
  },
  {
    company: 'Nutrien',
    role: 'Senior React Native Developer',
    dates: 'Sep 2023 – Feb 2024',
    details: 'Contract · Remote',
    highlights: [
      'Built React Native and TypeScript controls for mobile and web features in a customer-facing application; contributed to a mobile notifications proof of concept.',
    ],
  },
  {
    company: 'TxMQ',
    role: 'Senior Software Engineer / Consultant',
    dates: 'Aug 2022 – Jul 2023',
    details: 'Contract · Remote',
    highlights: [
      'Delivered production features in AngularJS and Ionic web and mobile applications for clients of an IBM solutions provider.',
      'Led OpenAI and LangChain research and prototypes exploring AI tools and IBM integrations.',
    ],
  },
  {
    company: 'Verizon',
    role: 'Senior Mobile Developer',
    dates: 'Nov 2021 – Aug 2022',
    details: 'Contract · Remote',
    highlights: [
      'Built and maintained Node.js and Express APIs and a JavaScript client SDK for an NFT/blockchain application, simplifying integration with the API.',
      'Containerized services with Docker and deployed them to AWS.',
    ],
  },
  {
    company: 'Independent Consulting (Self-Employed)',
    role: 'Web and Mobile Solutions Architect',
    dates: 'Feb 2015 – Nov 2021',
    details: '',
    highlights: [
      'Worked on approximately 40 client projects spanning websites, SaaS products, and mobile applications; built and deployed five React Native apps.',
      'Built frontends and APIs with React, Next.js, TypeScript, Node.js, Express, and GraphQL, backed by MongoDB, PostgreSQL, and SQL Server; used Jest and Enzyme for test-driven development.',
    ],
  },
  {
    company: 'Key Energy Services',
    role: 'Lead Web and Mobile Developer',
    dates: 'May 2012 – Apr 2015',
    details: 'Midland, TX',
    highlights: [
      'Led developers building an ERP with Ruby on Rails, Meteor, and Backbone.js, supporting executives, managers, and staff with access to millions of records daily.',
      'Connected complex oil and gas systems through a Rails API, enabled offline access to selected workflows, and used Jenkins for CI/CD.',
    ],
  },
]

export const earlierExperience = [
  { company: 'Warren Equipment Company', role: 'Web Developer', dates: 'Feb 2011 – Feb 2012' },
  { company: 'Enertia Software', role: 'Web Developer', dates: 'Nov 2007 – Feb 2011' },
  {
    company: 'Independent Consulting (Self-Employed)',
    role: 'Web and Mobile Solutions Architect',
    dates: 'Jan 2000 – Nov 2007',
  },
  { company: 'OneTravel.com', role: 'Web Developer', dates: 'Jan 1999 – Jan 2000' },
]

export const featuredProjects = [
  {
    name: 'LayoutLark',
    slug: 'layoutlark',
    category: 'Visual design & prototyping',
    url: 'https://www.layoutlark.com/',
    image: '/projects/layoutlark.webp',
    imageAlt:
      'LayoutLark website showing its visual design workflow and an illustrative mobile app canvas.',
    description:
      'A visual design and prototyping platform for web and mobile apps. Create editable screens, reuse components, and connect them into interactive prototypes.',
    detail:
      'Connect an AI agent through MCP, then export UI starter code for Next.js, React, Tailwind CSS, Expo, or React Native.',
    tags: ['Visual editor', 'Interactive prototypes', 'MCP', 'Web + mobile exports'],
  },
  {
    name: 'FieldBrief',
    slug: 'fieldbrief',
    category: 'Full stack well investigations',
    url: 'https://fieldbrief-web-by3rahuzbivnu.azurewebsites.net/',
    image: '/projects/fieldbrief.webp',
    imageAlt:
      'FieldBrief website introducing its well investigation workspace and production data technology stack.',
    description:
      'A well investigation application that brings public well records, synthetic production data, and an AI assistant into one workflow.',
    detail:
      'Built with Next.js, TypeScript, C# / .NET, and Azure SQL, with Databricks for data preparation and Microsoft Foundry for the investigation agent.',
    tags: ['Next.js', 'TypeScript', 'C# / .NET', 'Azure SQL'],
  },
]

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  description: profile.description,
  url: 'https://jasoncochran.io',
  sameAs: [profile.linkedin, profile.github],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Midland',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
}
