import type { TechIconId } from '@/lib/tech-brand-meta'

export const LINKEDIN_URL =
  'https://www.linkedin.com/in/jos%C3%A9-daniel-aranda-719201242/?skipRedirect=true'

/** Perfil de GitHub (overview, no la pestaña followers). */
export const GITHUB_URL = 'https://github.com/Xaniel-ac10'

export const CONTACT_EMAIL = 'arandaj232@gmail.com' as const

/** Abre el cliente de correo con asunto sugerido (mailto). */
export function mailtoContactHref(): string {
  const subject = encodeURIComponent('Contacto desde portafolio')
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`
}

export const profile = {
  name: 'José Daniel Aranda',
  age: 21,
  location: 'Guayaquil, Ecuador',
  tagline:
    'Backend, APIs REST, automatización e integraciones. Escríbeme por correo; más detalle en LinkedIn y repos en GitHub.',
} as const

/** Tecnologías para la franja tipo marquee */
export const stackMarquee: string[] = [
  'Python',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express',
  'NestJS',
  'REST APIs',
  'LangChain',
  'WhatsApp',
  'Telegram',
  'SQL',
  'MongoDB',
  'Atlas',
  'Linux',
  'Git',
]

export type SkillRow = { label: string; icon: TechIconId }

export const skillGroups: { title: string; items: SkillRow[] }[] = [
  {
    title: 'Lenguajes',
    items: [
      { label: 'Python', icon: 'python' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: 'Backend y APIs',
    items: [
      { label: 'Node.js', icon: 'nodedotjs' },
      { label: 'Express', icon: 'express' },
      { label: 'NestJS (nociones, en mejora continua)', icon: 'nestjs' },
      { label: 'APIs REST (JavaScript y TypeScript)', icon: 'swagger' },
    ],
  },
  {
    title: 'IA y automatización',
    items: [
      { label: 'LangChain', icon: 'langchain' },
      { label: 'agentes de IA', icon: 'openai' },
    ],
  },
  {
    title: 'Integraciones',
    items: [
      {
        label: 'Bots WhatsApp (API oficial y no oficial, según el caso)',
        icon: 'whatsapp',
      },
      { label: 'Bots Telegram', icon: 'telegram' },
    ],
  },
  {
    title: 'Datos',
    items: [
      { label: 'SQL', icon: 'mysql' },
      { label: 'MongoDB', icon: 'mongodb' },
      { label: 'Compass', icon: 'compass' },
      { label: 'MongoDB Atlas', icon: 'atlas' },
    ],
  },
  {
    title: 'Sistema y flujo de trabajo',
    items: [
      { label: 'Linux', icon: 'linux' },
      { label: 'Git', icon: 'git' },
    ],
  },
  {
    title: 'Seguridad',
    items: [{ label: 'Pentesting (nivel junior)', icon: 'kalilinux' }],
  },
  {
    title: 'Formación Cisco',
    items: [
      { label: 'Ethical Hacking', icon: 'cisco' },
      { label: 'Networking Basics', icon: 'cisco' },
      { label: 'Linux (curso Cisco)', icon: 'linux' },
    ],
  },
]

export type BuiltRow = { text: string; icons: TechIconId[] }

export const builtHighlights: BuiltRow[] = [
  {
    text: 'Agentes de inteligencia artificial con LangChain.',
    icons: ['langchain', 'openai'],
  },
  {
    text: 'APIs REST con Express y Node.js (JavaScript y TypeScript).',
    icons: ['nodedotjs', 'swagger'],
  },
  {
    text: 'Bots para WhatsApp y Telegram.',
    icons: ['whatsapp', 'telegram'],
  },
  {
    text: 'Automatización de flujos y gestión de alertas en entorno laboral.',
    icons: ['workflow'],
  },
]
