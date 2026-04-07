import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'

import { Button } from '@/components/ui/button'

const subscribeNothing = () => () => {}

function useIsClient() {
  return useSyncExternalStore(subscribeNothing, () => true, () => false)
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useIsClient()

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Cambiar tema" disabled>
        <Sun className="size-4 opacity-0" />
      </Button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <Sun className="size-4 scale-100 transition-all" />
      ) : (
        <Moon className="size-4 scale-100 transition-all" />
      )}
    </Button>
  )
}
