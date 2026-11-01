/**
 * IDs para logos: Simple Icons CDN + iconos Lucide donde encaja mejor.
 * {@link https://simpleicons.org/}
 */
export type TechIconId =
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'nodedotjs'
  | 'bun'
  | 'express'
  | 'hono'
  | 'nestjs'
  | 'swagger'
  | 'react'
  | 'nextdotjs'
  | 'astro'
  | 'langchain'
  | 'openai'
  | 'whatsapp'
  | 'telegram'
  | 'mysql'
  | 'postgresql'
  | 'mariadb'
  | 'mongodb'
  | 'docker'
  | 'linux'
  | 'git'
  | 'kalilinux'
  | 'cisco'
  | 'workflow'
  | 'digitalocean'
  | 'ovhcloud'
  | 'meta'
  | 'award'
  | 'graduation'
  | 'eve'
  | 'mastra'
  | 'briefcase'

export type BrandSource =
  | { kind: 'simpleicon'; slug: string; color: string }
  | {
      kind: 'lucide'
      name:
        | 'workflow'
        | 'sparkles'
        | 'award'
        | 'graduation'
        | 'bot'
        | 'briefcase'
    }

/** Colores hex sin # para cdn.simpleicons.org */
export const TECH_BRAND: Record<TechIconId, BrandSource> = {
  python: { kind: 'simpleicon', slug: 'python', color: '3776AB' },
  javascript: { kind: 'simpleicon', slug: 'javascript', color: 'F7DF1E' },
  typescript: { kind: 'simpleicon', slug: 'typescript', color: '3178C6' },
  nodedotjs: { kind: 'simpleicon', slug: 'nodedotjs', color: '339933' },
  bun: { kind: 'simpleicon', slug: 'bun', color: 'FBF0DF' },
  express: { kind: 'simpleicon', slug: 'express', color: '000000' },
  hono: { kind: 'simpleicon', slug: 'hono', color: 'E36002' },
  nestjs: { kind: 'simpleicon', slug: 'nestjs', color: 'E0234E' },
  swagger: { kind: 'simpleicon', slug: 'swagger', color: '85EA2D' },
  react: { kind: 'simpleicon', slug: 'react', color: '61DAFB' },
  nextdotjs: { kind: 'simpleicon', slug: 'nextdotjs', color: '000000' },
  astro: { kind: 'simpleicon', slug: 'astro', color: 'BC52EE' },
  langchain: { kind: 'lucide', name: 'sparkles' },
  openai: { kind: 'simpleicon', slug: 'openai', color: '412991' },
  whatsapp: { kind: 'simpleicon', slug: 'whatsapp', color: '25D366' },
  telegram: { kind: 'simpleicon', slug: 'telegram', color: '26A5E4' },
  mysql: { kind: 'simpleicon', slug: 'mysql', color: '4479A1' },
  postgresql: { kind: 'simpleicon', slug: 'postgresql', color: '4169E1' },
  mariadb: { kind: 'simpleicon', slug: 'mariadb', color: '003545' },
  mongodb: { kind: 'simpleicon', slug: 'mongodb', color: '47A248' },
  docker: { kind: 'simpleicon', slug: 'docker', color: '2496ED' },
  linux: { kind: 'simpleicon', slug: 'linux', color: 'FCC624' },
  git: { kind: 'simpleicon', slug: 'git', color: 'F05032' },
  kalilinux: { kind: 'simpleicon', slug: 'kalilinux', color: '557C94' },
  cisco: { kind: 'simpleicon', slug: 'cisco', color: '1BA0D7' },
  workflow: { kind: 'lucide', name: 'workflow' },
  digitalocean: { kind: 'simpleicon', slug: 'digitalocean', color: '0080FF' },
  ovhcloud: { kind: 'simpleicon', slug: 'ovh', color: '123F6D' },
  meta: { kind: 'simpleicon', slug: 'meta', color: '0668E1' },
  award: { kind: 'lucide', name: 'award' },
  graduation: { kind: 'lucide', name: 'graduation' },
  /** Framework de agentes de Vercel; reusa el logo de Vercel (sin ícono propio en Simple Icons). */
  eve: { kind: 'simpleicon', slug: 'vercel', color: '000000' },
  mastra: { kind: 'lucide', name: 'bot' },
  briefcase: { kind: 'lucide', name: 'briefcase' },
}

export function techIconCdnUrl(slug: string, color: string): string {
  return `https://cdn.simpleicons.org/${slug}/${color}`
}
