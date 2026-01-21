import type { Metadata } from 'next'
import { Download, Mail, MapPin, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Jason Cochran - 28 years of software engineering experience. AI-Powered Software Development specialist. Expert in React, Next.js, NestJS, TypeScript, and building AI-augmented automation solutions.',
  keywords: ['Resume', 'CV', 'Software Engineer', 'AI Development', 'Automation', 'React', 'Next.js', 'TypeScript', 'NestJS', 'Full Stack Developer'],
  openGraph: {
    title: 'Resume - Jason Cochran',
    description: '28 years of software engineering experience. AI & Automation specialist building production-ready software faster with modern AI tooling.',
    type: 'profile',
    url: 'https://jasoncochran.io/resume',
  },
  alternates: {
    canonical: 'https://jasoncochran.io/resume',
  },
}

export default function Resume() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="section-header text-5xl md:text-6xl mb-4">Jason Cochran</h1>
          <p className="text-xl text-[var(--text-secondary)] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Software Engineer | AI & Automation Specialist
          </p>
          <div className="flex flex-wrap gap-4 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
            <a href="mailto:me@jasoncochran.io" className="flex items-center gap-2 hover:text-[var(--pop-red)] transition-colors">
              <Mail className="w-4 h-4" />
              me@jasoncochran.io
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Midland, TX
            </span>
            <a href="https://www.linkedin.com/in/cochranjason/" className="flex items-center gap-2 hover:text-[var(--pop-red)] transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://x.com/jcochranio" className="flex items-center gap-2 hover:text-[var(--pop-red)] transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              @jcochranio
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <div className="card-pop p-6">
            <h2 className="text-2xl mb-4 pb-3 border-b-4 border-[var(--pop-black)]" style={{ fontFamily: 'var(--font-headline)' }}>
              SUMMARY
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Software Engineer with 28 years of experience specializing in AI-augmented development and automation.
              Leveraging cutting-edge AI tools like Claude Code and Cursor to ship production-ready software in weeks, not months.
              Expert in modern JavaScript/TypeScript ecosystems, building scalable web and mobile applications with
              React, Next.js, and Node.js. Passionate about combining deep engineering experience with AI tooling for maximum velocity.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="section-header text-3xl mb-6">TECHNICAL SKILLS</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="skill-card">
              <h3 className="font-bold mb-2 text-[var(--pop-black)]" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>FRONTEND</h3>
              <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                JavaScript, TypeScript, React, React Native, Next.js, HTML/CSS
              </p>
            </div>
            <div className="skill-card skill-card-alt">
              <h3 className="font-bold mb-2 text-[var(--pop-black)]" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>BACKEND</h3>
              <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                Node.js, NestJS, Express.js, GraphQL, Web Services
              </p>
            </div>
            <div className="skill-card skill-card-blue">
              <h3 className="font-bold mb-2 text-[var(--pop-black)]" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>DATABASES</h3>
              <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                PostgreSQL, MongoDB, SQL Server, MySQL, Redis
              </p>
            </div>
            <div className="skill-card">
              <h3 className="font-bold mb-2 text-[var(--pop-black)]" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem' }}>TOOLS & DEVOPS</h3>
              <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                Docker, AWS, Git, CI/CD, Jest, Enzyme
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="section-header text-3xl mb-6">CERTIFICATIONS</h2>
          <div className="card-pop p-6">
            <div className="space-y-3">
              <div>
                <a href="https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/AFE0258379C78FC6?sharingId=955379E09D280B0D" className="text-[var(--pop-red)] hover:underline font-semibold">
                  Microsoft Azure Fundamentals (AZ-900)
                </a>
              </div>
              <div>
                <a href="https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/88863517C68C1A2E?sharingId=955379E09D280B0D" className="text-[var(--pop-red)] hover:underline font-semibold">
                  Microsoft Azure AI Fundamentals (AI-900)
                </a>
              </div>
              <div>
                <span className="tag-pop">In Progress</span>
                <span className="ml-3 text-[var(--text-secondary)]">Microsoft Azure Administrator Associate (AZ-104)</span>
              </div>
              <div>
                <a href="https://www.hackerrank.com/certificates/3adb70f4345d" className="text-[var(--pop-red)] hover:underline font-semibold">
                  JavaScript Certification - HackerRank
                </a>
              </div>
              <div>
                <a href="https://app.testdome.com/cert/30dcc723088f45b6b5e49e0fcac36db4" className="text-[var(--pop-red)] hover:underline font-semibold">
                  React.js Certification - TestDome
                </a>
              </div>
              <div>
                <a href="https://www.hackerrank.com/certificates/cd642c762766" className="text-[var(--pop-red)] hover:underline font-semibold">
                  Node.js Certification - HackerRank
                </a>
              </div>
              <div>
                <span className="text-[var(--text-secondary)]">Certified Corda (Distributed Ledger / Blockchain) Developer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="section-header text-3xl mb-8">PROFESSIONAL EXPERIENCE</h2>

          <div className="space-y-6">
            {/* Strataga */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>FOUNDER</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Strataga, LLC - Midland, TX</p>
                </div>
                <span className="tag-pop">Oct 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Founded technology solutions company focused on AI-Powered Software Development and automation</li>
                <li>Built DemiArch - Local-first, open-source AI code generator in Rust with hierarchical agent system</li>
                <li>Created ClickToWA - SaaS platform for trackable WhatsApp marketing with real-time analytics</li>
                <li>Leveraging Claude Code and Cursor for 10x development velocity on all projects</li>
                <li>Architected multi-tenant SaaS platforms with Next.js, TypeScript, and PostgreSQL</li>
                <li>Implemented AI-assisted testing, code review, and automated deployment pipelines</li>
                <li>Built ML service for equipment failure prediction (7-30 day advance warnings, &gt;80% accuracy)</li>
                <li>Documented 95+ architectural patterns for AI-augmented software development</li>
              </ul>
            </div>

            {/* Servant */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>SENIOR SOFTWARE ENGINEER</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Servant (Remote)</p>
                </div>
                <span className="tag-pop">Feb 2025 - Sep 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Developed full-stack web application using NestJS and Next.js for EMA project portal</li>
                <li>Implemented role-based access control and JWT authentication for secure user access</li>
                <li>Built robust API with RESTful endpoints and Swagger documentation</li>
                <li>Created responsive UI using React, Tailwind CSS, and shadcn/ui components</li>
                <li>Integrated AWS services (SES, SNS, S3) for notifications and file uploads</li>
              </ul>
            </div>

            {/* Big D Companies */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>SENIOR SOFTWARE ENGINEER</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Big D Companies - Midland, TX</p>
                </div>
                <span className="tag-pop">Mar 2024 - Sep 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Converted legacy PHP-based SCADA ERP system to modern React/Next.js solution</li>
                <li>Significantly enhanced performance and maintainability while maintaining MySQL database</li>
                <li>Implemented testing with Jest and CI/CD with CircleCI</li>
              </ul>
            </div>

            {/* Nutrien */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>SENIOR REACT NATIVE DEVELOPER</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Nutrien</p>
                </div>
                <span className="tag-pop">Sep 2023 - Feb 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Built custom cross-platform (web/mobile) React Native components using TypeScript</li>
                <li>Worked in highly agile team environment</li>
                <li>Testing with Jest and Enzyme, CI/CD through CircleCI</li>
              </ul>
            </div>

            {/* TxMQ */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>SENIOR SOFTWARE ENGINEER</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>TxMQ</p>
                </div>
                <span className="tag-pop">Oct 2022 - Jun 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Developed web and mobile solutions using AngularJS and Ionic</li>
                <li>Spearheaded AI research initiative using OpenAI, Node.js and React.js</li>
                <li>Became certified Corda (Distributed Ledger/Blockchain) Developer</li>
              </ul>
            </div>

            {/* Verizon */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>SENIOR MOBILE APPS DEVELOPER</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Verizon</p>
                </div>
                <span className="tag-pop">Oct 2021 - Nov 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Developed full-stack NFT collectibles solution for AMC Walking Dead app</li>
                <li>Built using React Native, Node.js, Express.js, Postgres, interfacing with Ethereum blockchain</li>
                <li>Pioneered REST request scheduling system using Node.js, Express, Redis, and Socket.io</li>
                <li>Built JavaScript SDK for third-party integration with Verizon APIs</li>
              </ul>
            </div>

            {/* Self-Employed Solutions Architect */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>SOLUTIONS ARCHITECT</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Self-Employed</p>
                </div>
                <span className="tag-pop">Apr 2015 - Oct 2021</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Completed 30+ software development projects for various clients across different verticals</li>
                <li>Developed full-stack web and mobile applications using React, React Native, Node.js, Next.js</li>
                <li>Technologies: Express, MongoDB, MySQL, PostgreSQL, AWS</li>
              </ul>
            </div>

            {/* Key Energy Services */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="flex-1">
                  <h3 className="text-xl" style={{ fontFamily: 'var(--font-headline)' }}>SENIOR SOFTWARE ENGINEER</h3>
                  <p className="text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Key Energy Services</p>
                </div>
                <span className="tag-pop">Feb 2012 - Apr 2015</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-2" style={{ fontFamily: 'var(--font-body)' }}>
                <li>Led team of developers building large-scale ERP solution</li>
                <li>Used Ruby on Rails, Meteor, and Backbone.js</li>
                <li>Implemented offline access for limited connectivity scenarios</li>
              </ul>
            </div>

            {/* Earlier Experience */}
            <div className="card-pop p-6">
              <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>EARLIER EXPERIENCE</h3>
              <div className="space-y-4 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                <p><strong>Warren Equipment Company</strong> - Senior Software Engineer (2011-2012)</p>
                <p><strong>Enertia Software</strong> - Senior Software Engineer (2007-2011)</p>
                <p><strong>Self-Employed</strong> - Web/Mobile Solutions Architect (2000-2007)</p>
                <p><strong>OneTravel.com</strong> - Web Developer (1999-2000)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Button */}
        <div className="mt-12 pt-8 border-t-4 border-[var(--pop-black)]">
          <a
            href="/Jason-Cochran-Resume.pdf"
            download
            className="btn-pop btn-pop-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  )
}
