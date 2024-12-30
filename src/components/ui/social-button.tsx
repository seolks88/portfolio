'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  children: React.ReactNode
  href?: string
}

export function SocialButton({
  icon,
  children,
  className,
  href,
  ...props
}: SocialButtonProps) {
  const content = (
    <Button
      variant='outline'
      className={cn(
        'flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-muted',
        'dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300 dark:backdrop-blur-md',
        'dark:hover:border-slate-700 dark:hover:bg-slate-800/60 dark:hover:text-slate-200',
        'dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        className
      )}
      {...props}>
      {icon}
      {children}
    </Button>
  )

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'>
        {content}
      </a>
    )
  }

  return content
}
