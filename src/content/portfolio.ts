import type { TechIconId } from '@/lib/tech-brand-meta'

export const LINKEDIN_URL =
  'https://www.linkedin.com/in/jos%C3%A9-daniel-aranda-719201242/?skipRedirect=true'

/** Perfil de GitHub (overview, no la pestaña followers). */
export const GITHUB_URL = 'https://github.com/Xaniel-ac10'

export const CV_URL = '/cv-jose-daniel-aranda.pdf'

export const CONTACT_EMAIL = 'arandaj232@gmail.com' as const

/** Abre el cliente de correo con asunto sugerido (mailto). */
export function mailtoContactHref(): string {
  const subject = encodeURIComponent('Contacto desde portafolio')
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`
}

export const profile = {
  name: 'José Daniel Aranda',
  age: 22,
  location: 'Guayaquil, Ecuador',
  tagline:
    'Me gusta que las cosas funcionen sin fricciones: automatizo procesos, conecto sistemas y, cuando se puede, meto mano en ciberseguridad y hacking ético. Escríbeme por correo.',
} as const

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
      { label: 'Bun', icon: 'bun' },
      { label: 'Express', icon: 'express' },
      { label: 'Hono', icon: 'hono' },
      { label: 'NestJS', icon: 'nestjs' },
      { label: 'APIs REST', icon: 'swagger' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React', icon: 'react' },
      { label: 'Next.js', icon: 'nextdotjs' },
      { label: 'Astro', icon: 'astro' },
    ],
  },
  {
    title: 'Datos y sistemas',
    items: [
      { label: 'SQL', icon: 'mysql' },
      { label: 'PostgreSQL', icon: 'postgresql' },
      { label: 'MariaDB', icon: 'mariadb' },
      { label: 'MongoDB', icon: 'mongodb' },
      { label: 'Docker', icon: 'docker' },
      { label: 'Linux', icon: 'linux' },
      { label: 'Git', icon: 'git' },
    ],
  },
  {
    title: 'Cloud y despliegue',
    items: [
      { label: 'DigitalOcean', icon: 'digitalocean' },
      { label: 'OVHcloud', icon: 'ovhcloud' },
    ],
  },
  {
    title: 'Integraciones',
    items: [
      { label: 'Bots y agentes IA', icon: 'workflow' },
      { label: 'Meta (WhatsApp, Messenger, Instagram)', icon: 'meta' },
      { label: 'Bots Telegram', icon: 'telegram' },
    ],
  },
  {
    title: 'IA y automatización',
    items: [
      { label: 'LangChain', icon: 'langchain' },
      { label: 'eve (Vercel)', icon: 'eve' },
      { label: 'Mastra', icon: 'mastra' },
    ],
  },
  {
    title: 'Seguridad y formación',
    items: [
      { label: 'Pentesting', icon: 'kalilinux' },
      { label: 'Ethical Hacking (Cisco)', icon: 'cisco' },
      { label: 'Networking Basics (Cisco)', icon: 'cisco' },
      { label: 'Linux (curso Cisco)', icon: 'linux' },
    ],
  },
]

export type Project = {
  name: string
  description: string
  tags: string[]
  /** Link a la página real (no siempre hay repo público). */
  url?: string
}

export const projects: Project[] = [
  {
    name: 'Marphones',
    description:
      'Tienda de celulares y smartphones: landing, panel de administración y facturación electrónica con firma digital al SRI (se reenvía por correo al cliente). Incluye un agente de IA que conversa con los clientes, negocia y cierra ventas según el catálogo.',
    tags: ['Next.js', 'Hono', 'MongoDB', 'Agente IA'],
    url: 'https://marphones.com/',
  },
  {
    name: 'Ocean Trans',
    description:
      'Proyecto privado, para transporte de carga pesada (volquetas y tráilers): monitoreo GPS en tiempo real por WebSockets e IA sobre cámaras para detectar fatiga o incidentes del conductor. Módulos de finanzas, localización y agentes IA: un bot de WhatsApp para la reportería de los conductores y un agente gerencial que genera gráficas, Excel y PDF bajo demanda. El enlace muestra el login; el panel es privado.',
    tags: ['Astro', 'Bun', 'PostgreSQL', 'WebSockets', 'Agentes IA'],
    url: 'https://oceantrans.we-track.ai/',
  },
  {
    name: 'IT Store',
    description:
      'E-commerce público de tecnología, con pasarela de pago Payphone, catálogo y panel de administración.',
    tags: ['Astro', 'Node.js', 'Hono', 'MySQL'],
    url: 'https://itstoreec.com/',
  },
  {
    name: 'Plataforma de Pentesting Agéntico',
    description:
      'Proyecto privado de pentesting con IA: varios microservicios en Docker (un contenedor con Claude Code orquestando agentes, uno con Kali y MCPs de herramientas ofensivas, uno de browser headless para evidencia, y un dashboard en Next.js). Cubre 5 tipos de auditoría (web, API, red, red team, OSINT) con agentes especializados que ejecutan, verifican hallazgos y arman el reporte final. No es pública por motivos de seguridad.',
    tags: ['Docker', 'Claude Code', 'Next.js', 'MCP'],
  },
]

export type BuiltRow = { text: string; icons: TechIconId[]; url?: string }

export const builtHighlights: BuiltRow[] = [
  {
    text: 'Trabajo en SyscloudSeg hace 1 año y 3 meses, en el área de desarrollo: construyo software a medida, automatizo procesos y desarrollo agentes de IA para los proyectos de la empresa.',
    icons: ['briefcase'],
    url: 'https://www.syscloudsec.com/',
  },
  {
    text: 'Tecnólogo en Desarrollo de Software.',
    icons: ['graduation'],
  },
  {
    text: 'Jurado del hackathon de SteamCon (Algorithmics Guayaquil y Centro Campus), dos años seguidos: 2025 y 2026.',
    icons: ['award'],
  },
]

export type Certification = { name: string; url: string }

/** Cisco Networking Academy, verificables en Credly. */
export const certifications: Certification[] = [
  {
    name: 'Ethical Hacker',
    url: 'https://www.credly.com/badges/a91dbb75-1380-4da4-bfb7-3fcb582d1501/linked_in?t=t0lwpr',
  },
  {
    name: 'Python Essentials 1',
    url: 'https://www.credly.com/badges/35e791c2-25a3-40ed-ab50-213979b09674/linked_in?t=sxio3c',
  },
  {
    name: 'Networking Basics',
    url: 'https://www.credly.com/badges/67c4fd6e-31eb-4c89-b51f-17f70cbc8464/linked_in?t=swfvyb',
  },
  {
    name: 'Linux Unhatched',
    url: 'https://www.credly.com/badges/8e5b9b8e-804c-44bb-a817-eed64a0a035c/linked_in?t=stejsm',
  },
  {
    name: 'Introduction to Cybersecurity',
    url: 'https://www.credly.com/badges/8dd19d2e-d5ee-46b8-a60f-f447ce0f6cd3/linked_in?t=spup83',
  },
]
