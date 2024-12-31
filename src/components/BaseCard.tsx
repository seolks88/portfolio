import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function BaseCard({ className, children }: BaseCardProps) {
  return (
    <Card
      className={cn(
        'animate-fade-in overflow-hidden border border-slate-200 bg-transparent transition-colors hover:bg-slate-50/50 dark:border-slate-700/50 dark:hover:bg-slate-800/50',
        className
      )}>
      <CardContent className='space-y-6 p-6'>{children}</CardContent>
    </Card>
  )
}
