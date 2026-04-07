import { Compass, Sparkles, Workflow, type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  TECH_BRAND,
  type TechIconId,
  techIconCdnUrl,
} from '@/lib/tech-brand-meta'

const LUCIDE_BY_NAME: Record<
  'workflow' | 'sparkles' | 'compass',
  LucideIcon
> = {
  workflow: Workflow,
  sparkles: Sparkles,
  compass: Compass,
}

type TechBrandIconProps = {
  id: TechIconId
  className?: string
  /** Contenedor con fondo suave (útil para logos negros p. ej. Express). */
  withMutedTray?: boolean
}

export function TechBrandIcon({
  id,
  className,
  withMutedTray = true,
}: TechBrandIconProps) {
  const src = TECH_BRAND[id]

  if (src.kind === 'lucide') {
    const Icon = LUCIDE_BY_NAME[src.name]
    return (
      <span
        className={cn(
          'inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/50 text-muted-foreground',
          className
        )}
      >
        <Icon className="size-4" aria-hidden />
      </span>
    )
  }

  const { slug, color } = src
  const url = techIconCdnUrl(slug, color)
  const needsLightTray = id === 'express'

  const img = (
    <img
      src={url}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      decoding="async"
      className="size-5 object-contain"
    />
  )

  if (!withMutedTray) {
    return (
      <span className={cn('inline-flex size-8 items-center justify-center', className)}>
        {img}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/50',
        needsLightTray && 'bg-white dark:bg-zinc-200',
        className
      )}
    >
      {img}
    </span>
  )
}
