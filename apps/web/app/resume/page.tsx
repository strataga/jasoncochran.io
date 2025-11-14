import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Jason Cochran - 27 years of experience building web and mobile applications. Founder of Strataga LLC. Expert in React, Next.js, NestJS, Rust, TypeScript, and modern cloud technologies.',
  keywords: ['Resume', 'CV', 'Software Engineer', 'React', 'Next.js', 'TypeScript', 'NestJS', 'Rust', 'Azure', 'Full Stack Developer'],
  openGraph: {
    title: 'Resume - Jason Cochran',
    description: '27 years of software engineering experience. Founder of Strataga LLC, building WellOS and Catalyst PSA platforms.',
    type: 'profile',
    url: 'https://jasoncochran.io/resume',
  },
  alternates: {
    canonical: 'https://jasoncochran.io/resume',
  },
}

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Jason Cochran</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          27 Years Experience - Web/Mobile Apps Developer
        </p>
        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
          <a href="mailto:jason.cochran@strataga.io" className="hover:text-blue-600">
            jason.cochran@strataga.io
          </a>
          <span>•</span>
          <a href="tel:+14322607580" className="hover:text-blue-600">
            (432) 260-7580
          </a>
          <span>•</span>
          <span>Midland, TX</span>
          <span>•</span>
          <a href="https://www.linkedin.com/in/cochranjason/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
          Summary
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Senior Software Engineer with 27 years of experience building scalable web and mobile applications.
          Expertise in modern JavaScript/TypeScript ecosystems, including React, React Native, Next.js, and Node.js.
          Proven track record of leading development teams, architecting complex systems, and delivering high-quality
          solutions across diverse industries including healthcare, energy, blockchain, and e-commerce.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              JavaScript, TypeScript, React, React Native, Next.js, HTML/CSS
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Node.js, NestJS, Express.js, GraphQL, Web Services
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Databases</h3>
            <p className="text-gray-600 dark:text-gray-300">
              PostgreSQL, MongoDB, SQL Server, MySQL, Redis
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tools & DevOps</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Docker, AWS, Git, CI/CD, Jest, Enzyme
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
          Certifications
        </h2>
        <div className="space-y-2">
          <div>
            <a href="https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/AFE0258379C78FC6?sharingId=955379E09D280B0D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Microsoft Azure Fundamentals (AZ-900)
            </a>
          </div>
          <div>
            <a href="https://learn.microsoft.com/api/credentials/share/en-us/JasonCochran-0426/88863517C68C1A2E?sharingId=955379E09D280B0D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Microsoft Azure AI Fundamentals (AI-900)
            </a>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              Microsoft Azure Administrator Associate (AZ-104) - In Progress
            </p>
          </div>
          <div>
            <a href="https://www.hackerrank.com/certificates/3adb70f4345d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              JavaScript Certification - HackerRank
            </a>
          </div>
          <div>
            <a href="https://app.testdome.com/cert/30dcc723088f45b6b5e49e0fcac36db4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              React.js Certification - TestDome
            </a>
          </div>
          <div>
            <a href="https://www.hackerrank.com/certificates/cd642c762766" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Node.js Certification - HackerRank
            </a>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              Certified Corda (Distributed Ledger / Blockchain) Developer
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {/* Strataga */}
          <div>
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Founder & CEO</h3>
                <p className="text-gray-600 dark:text-gray-400">Strataga, LLC - Midland, TX</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Oct 2025 - Present</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Founded technology solutions company focused on oil & gas operations in the Permian Basin</li>
              <li>Built WellOS - comprehensive SaaS platform for upstream oil & gas operators ($50/well/month)</li>
              <li>Architected multi-tenant platform with Rust (Axum) backend, Next.js 15, React Native, and Electron</li>
              <li>Implemented real-time SCADA integration (OPC UA, Modbus TCP, MQTT) with &lt;1 second latency</li>
              <li>Developed offline-first mobile and desktop apps with event sourcing sync architecture</li>
              <li>Integrated TimescaleDB for 20x faster time-series data ingestion and compression</li>
              <li>Built ML service for equipment failure prediction (7-30 day advance warnings, &gt;80% accuracy)</li>
              <li>Created automated RRC compliance reporting for Texas oil & gas operators</li>
              <li>Documented 95+ architectural patterns for enterprise software development</li>
              <li>Provide custom software development and cloud infrastructure consulting services</li>
            </ul>
          </div>

          {/* Servant */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Servant (Remote)</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Feb 2025 - Sep 2025</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Developed full-stack web application using NestJS and Next.js for EMA project portal</li>
              <li>Implemented role-based access control and JWT authentication for secure user access</li>
              <li>Built robust API with RESTful endpoints and Swagger documentation</li>
              <li>Created responsive UI using React, Tailwind CSS, and shadcn/ui components</li>
              <li>Integrated AWS services (SES, SNS, S3) for notifications and file uploads</li>
              <li>Utilized Prisma with ZenStack for database operations and authorization</li>
              <li>Set up CI/CD pipelines using Railway for automated deployment</li>
              <li>Implemented real-time data updates and caching using React Query</li>
            </ul>
          </div>

          {/* Big D Companies */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Big D Companies - Midland, TX</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Mar 2024 - Sep 2024</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Converted legacy PHP-based SCADA ERP system to modern React/Next.js solution</li>
              <li>Significantly enhanced performance and maintainability while maintaining MySQL database</li>
              <li>Maintained legacy PHP codebase during transition</li>
              <li>Implemented testing with Jest and CI/CD with CircleCI</li>
            </ul>
          </div>

          {/* Nutrien */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior React Native Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">Nutrien</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Sep 2023 - Feb 2024</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Built custom cross-platform (web/mobile) React Native components using TypeScript</li>
              <li>Worked in highly agile team environment</li>
              <li>Testing with Jest and Enzyme, CI/CD through CircleCI</li>
            </ul>
          </div>

          {/* TxMQ */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">TxMQ</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Oct 2022 - Jun 2023</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Developed web and mobile solutions using AngularJS and Ionic</li>
              <li>Built management system for medical marijuana growers</li>
              <li>Spearheaded AI research initiative using OpenAI, Node.js and React.js</li>
              <li>Became certified Corda (Distributed Ledger/Blockchain) Developer</li>
            </ul>
          </div>

          {/* Verizon */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Mobile Apps Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">Verizon</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Oct 2021 - Nov 2022</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Developed full-stack NFT collectibles solution for AMC Walking Dead app</li>
              <li>Built using React Native, Node.js, Express.js, Postgres, interfacing with Ethereum blockchain</li>
              <li>Pioneered REST request scheduling system using Node.js, Express, Redis, and Socket.io</li>
              <li>Built JavaScript SDK for third-party integration with Verizon APIs</li>
              <li>Deployments to AWS EC2 with Docker and Kubernetes</li>
            </ul>
          </div>

          {/* Self-Employed Solutions Architect */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Solutions Architect</h3>
                <p className="text-gray-600 dark:text-gray-400">Self-Employed</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Apr 2015 - Oct 2021</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Completed 30+ software development projects for various clients across different verticals</li>
              <li>Developed full-stack web and mobile applications using React, React Native, Node.js, Next.js</li>
              <li>Technologies: Express, MongoDB, MySQL, PostgreSQL, AWS</li>
              <li>Projects included: OTC medications mobile app, air quality lookup, fintech app, chiropractor management system</li>
            </ul>
          </div>

          {/* Key Energy Services */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Key Energy Services</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Feb 2012 - Apr 2015</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Led team of developers building large-scale ERP solution for oil/gas services company</li>
              <li>Used Ruby on Rails, Meteor, and Backbone.js</li>
              <li>Simplified access to complex oil/gas backend systems</li>
              <li>Implemented offline access for limited connectivity scenarios</li>
              <li>Testing with Cucumber, CI/CD with Jenkins, deployments using Docker</li>
            </ul>
          </div>

          {/* Warren Equipment Company */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Warren Equipment Company</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Feb 2011 - Feb 2012</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Developed web applications for heavy equipment company</li>
              <li>Built custom inventory management and tracking systems</li>
              <li>Implemented reporting and analytics solutions</li>
              <li>Worked with ASP.NET, C#, and SQL Server</li>
              <li>Integrated with existing ERP systems</li>
            </ul>
          </div>

          {/* Enertia Software */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Enertia Software</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Nov 2007 - Feb 2011</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Developed enterprise software solutions for energy sector clients</li>
              <li>Built web applications using ASP.NET, C#, and SQL Server</li>
              <li>Implemented data integration solutions for oil and gas operations</li>
              <li>Created reporting and analytics dashboards</li>
              <li>Worked with complex business logic and workflows</li>
            </ul>
          </div>

          {/* Web/Mobile Solutions Architect - Self-Employed */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Web/Mobile Solutions Architect</h3>
                <p className="text-gray-600 dark:text-gray-400">Self-Employed</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Jan 2000 - Nov 2007</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Provided web and mobile application development consulting services</li>
              <li>Developed custom solutions for diverse client base across multiple industries</li>
              <li>Built e-commerce platforms, content management systems, and business applications</li>
              <li>Technologies: ASP.NET, PHP, JavaScript, SQL Server, MySQL</li>
              <li>Managed complete project lifecycle from requirements to deployment</li>
            </ul>
          </div>

          {/* OneTravel.com */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">OneTravel.com</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Jan 1999 - Jan 2000</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-2">
              <li>Developed features for online travel booking platform</li>
              <li>Built flight search and booking interfaces using ASP and JavaScript</li>
              <li>Integrated with multiple travel API providers (airlines, hotels, car rentals)</li>
              <li>Implemented secure payment processing systems</li>
              <li>Worked with high-traffic, mission-critical e-commerce application</li>
              <li>Collaborated with cross-functional teams in fast-paced startup environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Button */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <a
          href="/Jason-Cochran-Resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Download PDF Resume
        </a>
      </div>
    </div>
  )
}
