export interface Project {
  title: string
  description: string
  org: string
  url: string
}

export const projects: Project[] = [
  {
    title: 'BV Open',
    description:
      "Developer portal giving access to the bank's open APIs. Worked mainly on the Angular frontend and on the integration/architecture between the portal and several services (API gateway, BFF, MFA providers).",
    org: 'banco BV',
    url: 'https://www.bvopen.com.br/',
  },
  {
    title: 'Os 75 melhores brinquedos do ano',
    description:
      'Interactive infographic for Revista Crescer, built with HTML5, CSS3 and JavaScript.',
    org: 'Freelancer',
    url: 'https://revistacrescer.globo.com/Infograficos/Melhores-brinquedos/noticia/2014/08/os-75-melhores-brinquedos-do-ano-2014.html',
  },
  {
    title: 'Wiki-Glossário',
    description: 'Ruby on Rails web application.',
    org: 'MMCafé',
    url: 'https://www.mmcafe.com.br/glossario/',
  },
  {
    title: 'Reserva de salas e equipamentos',
    description: 'Room and equipment booking — Ruby on Rails web application.',
    org: 'MMCafé',
    url: 'https://www.mmcafe.com.br/reserva-de-salas-e-equipamentos/',
  },
  {
    title: 'Snake game',
    description: 'The classic game in plain HTML, CSS and JavaScript.',
    org: 'Personal',
    url: 'https://chrisbenseler.github.io/snakeweb/',
  },
]
