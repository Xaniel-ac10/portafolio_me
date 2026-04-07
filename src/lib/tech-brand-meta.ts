/**
 * IDs para logos: Simple Icons CDN + iconos Lucide donde encaja mejor.
 * {@link https://simpleicons.org/}
 */
export type TechIconId =
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'nodedotjs'
  | 'express'
  | 'nestjs'
  | 'swagger'
  | 'langchain'
  | 'openai'
  | 'whatsapp'
  | 'telegram'
  | 'mysql'
  | 'mongodb'
  | 'compass'
  | 'atlas'
  | 'linux'
  | 'git'
  | 'kalilinux'
  | 'cisco'
  | 'workflow'

export type BrandSource =
  | { kind: 'simpleicon'; slug: string; color: string }
  | { kind: 'lucide'; name: 'workflow' | 'sparkles' | 'compass' }

/** Colores hex sin # para cdn.simpleicons.org */
export const TECH_BRAND: Record<TechIconId, BrandSource> = {
  python: { kind: 'simpleicon', slug: 'python', color: '3776AB' },
  javascript: { kind: 'simpleicon', slug: 'javascript', color: 'F7DF1E' },
  typescript: { kind: 'simpleicon', slug: 'typescript', color: '3178C6' },
  nodedotjs: { kind: 'simpleicon', slug: 'nodedotjs', color: '339933' },
  express: { kind: 'simpleicon', slug: 'express', color: '000000' },
  nestjs: { kind: 'simpleicon', slug: 'nestjs', color: 'E0234E' },
  swagger: { kind: 'simpleicon', slug: 'swagger', color: '85EA2D' },
  langchain: { kind: 'lucide', name: 'sparkles' },
  openai: { kind: 'simpleicon', slug: 'openai', color: '412991' },
  whatsapp: { kind: 'simpleicon', slug: 'whatsapp', color: '25D366' },
  telegram: { kind: 'simpleicon', slug: 'telegram', color: '26A5E4' },
  mysql: { kind: 'simpleicon', slug: 'mysql', color: '4479A1' },
  mongodb: { kind: 'simpleicon', slug: 'mongodb', color: '47A248' },
  compass: { kind: 'lucide', name: 'compass' },
  atlas: { kind: 'simpleicon', slug: 'mongodb', color: '47A248' },
  linux: { kind: 'simpleicon', slug: 'linux', color: 'FCC624' },
  git: { kind: 'simpleicon', slug: 'git', color: 'F05032' },
  kalilinux: { kind: 'simpleicon', slug: 'kalilinux', color: '557C94' },
  cisco: { kind: 'simpleicon', slug: 'cisco', color: '1BA0D7' },
  workflow: { kind: 'lucide', name: 'workflow' },
}

export function techIconCdnUrl(slug: string, color: string): string {
  return `https://cdn.simpleicons.org/${slug}/${color}`
}
