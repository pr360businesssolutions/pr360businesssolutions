// All website copy lives here, separated from the UI components so content
// can be updated without touching layout logic.

export const company = {
  name: 'PR 360° Business Solution',
  shortName: 'PR 360°',
  tagline: 'Reliable QA Expertise. Quality You Can Trust.',
  positioning:
    'PR 360° is a Software Testing & Quality Assurance partner that helps businesses improve application quality through dedicated QA professionals and structured software testing services.',
  location: 'Pune, Maharashtra, India',
  email: 'pr360business@gmail.com',
  phones: ['+91 97678 40878', '+91 91468 00595'],
  // WhatsApp uses the first number in international format, digits only.
  whatsapp: '919767840878',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Engagement Models', href: '#engagement' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact Us', href: '#contact' },
]

export const hero = {
  heading: 'Reliable QA Expertise. Quality You Can Trust.',
  body: "We help startups, SaaS businesses and software development companies deliver reliable applications through professional software testing and quality assurance services. Whether you need dedicated QA professionals or complete testing support for your application, PR 360° offers flexible solutions aligned with your business requirements.",
  primaryCta: { label: 'Explore Our Services', href: '#services' },
  secondaryCta: { label: 'Discuss Your Project', href: '#contact' },
  highlights: [
    {
      icon: 'ClipboardCheck',
      title: 'Manual Software Testing',
      text: 'Structured functional and regression testing that validates real business workflows.',
    },
    {
      icon: 'Bot',
      title: 'Automation Testing',
      text: 'Reusable Selenium and Playwright frameworks for faster, repeatable regression.',
    },
    {
      icon: 'Database',
      title: 'API & Database Testing',
      text: 'REST API validation, schema checks and backend data verification.',
    },
    {
      icon: 'Users',
      title: 'Dedicated QA Resources',
      text: 'QA professionals who work alongside your development team.',
    },
  ],
}

export const about = {
  heading: 'About PR 360° Business Solution',
  paragraphs: [
    'PR 360° Business Solution focuses on delivering software testing and quality assurance services to businesses seeking reliable QA support.',
    'We work with startups, SaaS businesses and software development companies to support their application quality through dedicated testing professionals and project-based QA engagements.',
    'Our approach emphasizes understanding business requirements, identifying potential issues, validating application functionality and supporting reliable software releases.',
  ],
  mission:
    'To help businesses deliver quality software through reliable testing expertise and flexible QA support.',
  vision:
    'To build long-term business partnerships by making software quality an essential part of every successful digital product.',
}

export const services = [
  {
    id: 'manual',
    icon: 'ClipboardCheck',
    title: 'Manual Software Testing',
    description:
      'Ensure your application works as expected through structured manual testing and practical validation of business workflows.',
    items: [
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'UI Testing',
      'Cross-Browser Testing',
      'Exploratory Testing',
      'Mobile Application Testing',
    ],
  },
  {
    id: 'automation',
    icon: 'Bot',
    title: 'Automation Testing',
    description:
      'Improve testing efficiency and repeatability through reusable automated test frameworks.',
    items: [
      'Selenium with Java',
      'Playwright with TypeScript',
      'Web Application Automation',
      'API Automation',
      'Test Automation Framework Development',
      'Framework Maintenance',
      'Regression Automation',
      'Parallel Test Execution',
    ],
  },
  {
    id: 'api',
    icon: 'Database',
    title: 'API & Database Testing',
    description:
      'Validate application integrations, backend functionality and data consistency.',
    items: [
      'REST API Testing',
      'API Integration Testing',
      'Request & Response Validation',
      'JSON Schema Validation',
      'SQL Validation',
      'Backend Data Verification',
      'Data Consistency Testing',
    ],
  },
  {
    id: 'specialized',
    icon: 'Smartphone',
    title: 'Specialized Testing',
    description:
      'Support application quality across different platforms and business workflows.',
    items: [
      'Android Application Testing',
      'iOS Application Testing',
      'End-to-End Testing',
      'Integration Testing',
      'User Acceptance Testing Support',
      'Cross-Platform Validation',
    ],
  },
]

export const engagement = {
  heading: 'Engagement Models',
  subtitle: 'Two flexible ways to work with PR 360°, aligned to how your team operates.',
  models: [
    {
      id: 'dedicated',
      icon: 'UserCog',
      title: 'Dedicated QA Resources',
      description:
        'Get dedicated QA professionals who can work alongside your development team and support ongoing testing activities.',
      suitableLabel: 'Suitable for',
      suitable: [
        'Startups building software products',
        'Software companies requiring additional QA capacity',
        'SaaS businesses with continuous releases',
        'Development teams requiring long-term QA support',
      ],
    },
    {
      id: 'project',
      icon: 'ListChecks',
      title: 'Project-Based Testing',
      description:
        'Get structured testing support for specific applications, features, releases or defined project requirements.',
      suitableLabel: 'Suitable for',
      suitable: [
        'New application testing',
        'Feature validation',
        'Regression testing',
        'Release quality validation',
        'Defined testing assignments',
      ],
    },
  ],
  cta: { label: 'Discuss Your Engagement Requirements', href: '#contact' },
}

export const approach = {
  heading: 'Our Approach to Quality Assurance',
  subtitle: 'A structured, transparent process from requirements to final QA reporting.',
  steps: [
    {
      icon: 'Search',
      title: 'Understand Requirements',
      text: 'Understand application functionality, business requirements and testing scope.',
    },
    {
      icon: 'ClipboardList',
      title: 'Test Planning',
      text: 'Define test scenarios, testing coverage, priorities and execution approach.',
    },
    {
      icon: 'PlayCircle',
      title: 'Test Execution',
      text: 'Perform manual and automated testing based on project requirements.',
    },
    {
      icon: 'Bug',
      title: 'Defect Reporting',
      text: 'Document issues with clear reproduction steps, evidence and severity.',
    },
    {
      icon: 'RefreshCw',
      title: 'Retesting & Regression',
      text: 'Validate resolved defects and check for unintended impacts.',
    },
    {
      icon: 'FileBarChart',
      title: 'QA Reporting',
      text: 'Share testing results, execution summaries and outstanding observations.',
    },
  ],
}

export const whyChooseUs = {
  heading: 'Why Work With PR 360°?',
  subtitle: 'Practical QA support built around your product and your release goals.',
  reasons: [
    {
      icon: 'Users',
      title: 'Dedicated QA Professionals',
      text: 'Access QA resources to support software development and testing.',
    },
    {
      icon: 'SlidersHorizontal',
      title: 'Flexible Engagement Models',
      text: 'Choose dedicated QA resources or project-based testing.',
    },
    {
      icon: 'Target',
      title: 'Practical Testing Approach',
      text: 'Align testing activities with application functionality and business requirements.',
    },
    {
      icon: 'Layers',
      title: 'Manual & Automation Expertise',
      text: 'Combine manual validation and automation where appropriate.',
    },
    {
      icon: 'MessageSquare',
      title: 'Transparent Communication',
      text: 'Maintain visibility through structured defect reporting and testing updates.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Focus on Software Quality',
      text: 'Support better testing coverage and more informed software release decisions.',
    },
  ],
}

export const technologies = {
  heading: 'Tools & Technologies',
  subtitle: 'The core tools our team works with day to day.',
  tools: [
    'Selenium',
    'Playwright',
    'Java',
    'TypeScript',
    'TestNG',
    'Maven',
    'Postman',
    'SQL',
    'Jira',
  ],
}

export const contact = {
  heading: "Let's Discuss Your Testing Requirements",
  description:
    'Looking for reliable QA support for your software project? Whether you need dedicated QA professionals or structured testing support for your application, we would be happy to understand your requirements. Get in touch with PR 360° to discuss your project and explore how we can support your software quality goals.',
  serviceOptions: [
    'Manual Testing',
    'Automation Testing',
    'API Testing',
    'Dedicated QA Resources',
    'Project-Based Testing',
    'Other',
  ],
  privacyNote:
    'Your details are used only to respond to your enquiry. We do not share your information with third parties.',
}

export const trustStrip = [
  'Manual + Automation QA',
  'Selenium & Playwright',
  'API & Database Testing',
  'Flexible Engagement',
]
