export interface Skill {
  name: string
  /** Highlighted as a core skill. */
  core?: boolean
}

export interface SkillGroup {
  title: string
  icon: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'lucide:monitor',
    skills: [
      { name: 'Vue', core: true },
      { name: 'Angular', core: true },
      { name: 'HTML/CSS', core: true },
      { name: 'jQuery', core: true },
      { name: 'React' },
    ],
  },
  {
    title: 'Backend',
    icon: 'lucide:server',
    skills: [
      { name: 'Node.js', core: true },
      { name: 'Ruby on Rails' },
      { name: 'Go' },
      { name: 'PHP' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Databases',
    icon: 'lucide:database',
    skills: [
      { name: 'MongoDB', core: true },
      { name: 'Firebase' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Other',
    icon: 'lucide:wrench',
    skills: [
      { name: 'Docker', core: true },
      { name: 'AWS' },
      { name: 'Jenkins' },
      { name: 'Linux' },
      { name: 'Flutter' },
      { name: 'Kubernetes' },
      { name: 'React Native' },
    ],
  },
]
