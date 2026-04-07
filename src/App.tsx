import { MapPin } from 'lucide-react'

import { GitHubLogo, GmailLogo, LinkedInLogo } from '@/components/brand-icons'
import { TechBrandIcon } from '@/components/tech-brand-icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MagicCard } from '@/components/ui/magic-card'
import { Marquee } from '@/components/ui/marquee'
import { Separator } from '@/components/ui/separator'
import {
  builtHighlights,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  mailtoContactHref,
  profile,
  skillGroups,
  stackMarquee,
} from '@/content/portfolio'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b border-border/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <p className="text-sm font-medium text-muted-foreground">
            Portafolio
          </p>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-8 sm:py-16">
        <BlurFade delay={0.05} inView>
          <Card className="relative overflow-hidden py-0">
            <BorderBeam
              duration={10}
              size={120}
              colorFrom="#38bdf8"
              colorTo="#a78bfa"
            />
            <MagicCard
              className="rounded-xl"
              gradientFrom="#0ea5e9"
              gradientTo="#c026d3"
            >
              <CardHeader className="space-y-3 px-6 pb-2 pt-8 sm:space-y-4 sm:px-10 sm:pb-4 sm:pt-10 md:pt-12">
                <CardTitle className="font-heading text-3xl leading-tight tracking-tight sm:text-4xl md:text-[2.65rem] md:leading-[1.15]">
                  {profile.name}
                </CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base sm:text-lg">
                  <span>{profile.age} años</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 shrink-0 sm:size-[1.125rem]" aria-hidden />
                    {profile.location}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 px-6 pb-9 pt-3 sm:space-y-10 sm:px-10 sm:pb-11 sm:pt-5 md:pb-12">
                <p className="max-w-2xl text-pretty text-lg leading-[1.65] text-muted-foreground sm:text-xl sm:leading-[1.7]">
                  {profile.tagline}
                </p>
                <div className="flex flex-wrap gap-3 sm:items-center">
                  <Button asChild size="lg" className="gap-2.5">
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInLogo className="size-[22px]" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2.5">
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubLogo className="size-[22px]" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </MagicCard>
          </Card>
        </BlurFade>

        <section aria-labelledby="stack-heading" className="space-y-4">
          <BlurFade delay={0.08} inView>
            <h2
              id="stack-heading"
              className="font-heading text-lg font-medium"
            >
              Stack y herramientas
            </h2>
            <p className="text-sm text-muted-foreground">
              Lo que uso en proyectos y en el día a día.
            </p>
          </BlurFade>
          <BlurFade delay={0.12} inView>
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-muted/30 py-3">
              <Marquee pauseOnHover repeat={5} className="[--duration:45s]">
                {stackMarquee.map((label) => (
                  <Badge
                    key={label}
                    variant="secondary"
                    className="mx-1 shrink-0 px-3 py-1 text-sm font-normal"
                  >
                    {label}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </BlurFade>
        </section>

        <section aria-labelledby="skills-heading" className="space-y-6">
          <BlurFade delay={0.06} inView>
            <h2
              id="skills-heading"
              className="font-heading text-lg font-medium"
            >
              Detalle por área
            </h2>
            <Separator className="mt-3" />
          </BlurFade>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <BlurFade key={group.title} delay={0.04 + i * 0.03} inView>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <span className="flex gap-3 text-pretty">
                            <TechBrandIcon id={item.icon} />
                            <span className="min-w-0 pt-1 leading-snug">
                              {item.label}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </section>

        <section aria-labelledby="built-heading" className="space-y-4">
          <BlurFade delay={0.06} inView>
            <h2
              id="built-heading"
              className="font-heading text-lg font-medium"
            >
              Lo que he hecho
            </h2>
            <p className="text-sm text-muted-foreground">
              Resumen; el detalle de experiencia sigue en LinkedIn.
            </p>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {builtHighlights.map((row) => (
                    <li key={row.text}>
                      <span className="flex gap-3 text-pretty">
                        <span
                          className="flex shrink-0 gap-1.5 pt-0.5"
                          aria-hidden
                        >
                          {row.icons.map((id) => (
                            <TechBrandIcon key={id} id={id} />
                          ))}
                        </span>
                        <span className="min-w-0 pt-1 leading-snug">
                          {row.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>
        </section>

        <footer className="border-t border-border/80 pt-8">
          <div className="flex justify-center px-2">
            <Button
              asChild
              size="lg"
              className="h-auto min-h-10 max-w-full gap-2.5 py-3"
            >
              <a
                href={mailtoContactHref()}
                aria-label={`Enviar correo a ${CONTACT_EMAIL}`}
                className="inline-flex max-w-full flex-wrap items-center justify-center gap-2.5"
              >
                <GmailLogo />
                <span className="break-all text-center font-normal">
                  {CONTACT_EMAIL}
                </span>
              </a>
            </Button>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
