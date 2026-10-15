/** Dates use `YYYY-MM` or `YYYY`; a role without `end` is current. */
export interface Role {
  title: string
  start: string
  end?: string
  description: string[]
  stack?: string[]
}

export interface Experience {
  company: string
  tagline?: string
  roles: Role[]
}

export const experiences: Experience[] = [
  {
    company: 'Gympass',
    tagline: 'Corporate wellbeing platform',
    roles: [
      {
        title: 'Software Engineer',
        start: '2023-06',
        description: [
          'Software engineer in the Billing & Payments team, focused on frontend.',
        ],
      },
    ],
  },
  {
    company: 'Farm Tech',
    tagline: "Financial solutions for the agribusiness supply chain",
    roles: [
      {
        title: 'Tech Lead — Frontend',
        start: '2021-04',
        end: '2023-05',
        description: ['Tech lead of the frontend team.'],
        stack: ['Vue'],
      },
    ],
  },
  {
    company: 'banco BV',
    tagline: 'Mid-size Brazilian bank with a strong presence in finance and loans',
    roles: [
      {
        title: 'Fullstack Developer',
        start: '2018-07',
        end: '2021-04',
        description: [
          'In the innovation lab, built, deployed and maintained web applications — both to integrate the bank with other companies, fintechs and partners, and to serve internal areas.',
          'Also used and/or evaluated Python, Ruby on Rails, React and Flutter.',
        ],
        stack: ['Angular', 'Ionic', 'Node.js', 'MongoDB'],
      },
    ],
  },
  {
    company: 'MMCafé',
    roles: [
      {
        title: 'Frontend Engineer',
        start: '2010-01',
        end: '2018-06',
        description: [
          'Built, maintained, evolved and supported the product, working with the product and UX teams on the frontend definitions of web projects.',
          'Also worked with React, Vue, Java and PHP.',
        ],
        stack: ['Angular', 'Ionic', 'Node.js', 'jQuery', 'Ruby on Rails', 'Velocity'],
      },
      {
        title: 'Frontend Developer',
        start: '2005-02',
        end: '2010-01',
        description: [
          'As the senior frontend developer in the team, responsible for the frontend of web applications (HTML/CSS/JS) and template implementation, with a focus on performance, quality and maintainability for long-lived products.',
        ],
      },
    ],
  },
  {
    company: 'Freelancer',
    roles: [
      {
        title: 'Fullstack Developer',
        start: '2007',
        end: '2016',
        description: ['Front and backend development for web projects.'],
      },
    ],
  },
  {
    company: 'STS Print',
    roles: [
      {
        title: 'Fullstack Developer',
        start: '2003',
        end: '2004',
        description: ['C++ Builder developer.'],
      },
    ],
  },
]
