export interface Course {
  title: string
  provider: string
  note?: string
}

export const courses: Course[] = [
  { title: 'AWS Serverless APIs & Apps - A Complete Introduction', provider: 'Udemy' },
  { title: 'Borland C++ Builder', provider: 'Senai' },
  { title: 'Dart - Beginners Course', provider: 'Udemy' },
  { title: 'Desenvolvimento Ágil Ruby on Rails 3', provider: 'Caelum', note: 'RR-71' },
  { title: 'Developing Applications with GCP: App Deployment, Debugging, and Performance', provider: 'Coursera' },
  { title: 'Developing Applications with GCP: Getting Started With Application Development', provider: 'Coursera' },
  { title: 'Developing Applications with GCP: Securing and Integrating Components of your Application', provider: 'Coursera' },
  { title: 'Flutter - Advanced', provider: 'Udemy' },
  { title: 'Flutter - Intermediate', provider: 'Udemy' },
  { title: 'Google Cloud Platform Fundamentals: Core Infrastructure', provider: 'Coursera' },
  { title: 'GraphQL Apollo Server with Node.js, MongoDB', provider: 'Udemy' },
  { title: 'How to design & develop REST microservices in Golang / Go', provider: 'Udemy' },
  { title: 'JAVA e Orientação a Objetos', provider: 'Caelum', note: 'FJ-11' },
  { title: 'Mastering Visual Basic 6.0 Development', provider: 'KA Solutions' },
  { title: 'Modern Erlang for Beginners', provider: 'Udemy' },
  { title: 'Mongo DB: All About MongoDB', provider: 'Udemy' },
  { title: 'NestJS Zero to Hero - Modern TypeScript Back-end Development', provider: 'Udemy' },
  { title: 'PHP Essentials', provider: 'Senac' },
  { title: 'React Styled Components', provider: 'Udemy' },
  { title: 'Redis Bootcamp for Beginners: Get Hands On with Redis 5', provider: 'Udemy' },
  { title: 'Securing Applications in Node.js', provider: 'Udemy' },
  { title: 'The Complete Flutter App Development Course for Android, iOS', provider: 'Udemy' },
  { title: 'The Go Programming Language Tutorial - Volume 1', provider: 'Udemy' },
  { title: 'Ultimate Kubernetes Fast-Track Beginner to Advanced', provider: 'Udemy' },
]
