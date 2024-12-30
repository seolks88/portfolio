import React from 'react'
import { cn } from '@/lib/utils'

interface SectionCardProps {
  title: string
  description?: string
  date?: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export function SectionCard({
  title,
  description,
  date,
  icon,
  className,
  children,
  style
}: SectionCardProps) {
  return (
    <div
      style={style}
      className={cn(
        'rounded-lg border bg-card p-6',
        'bg-gradient-to-br from-white to-slate-50/50 dark:from-gray-900 dark:to-gray-900/50',
        className
      )}>
      <div className='space-y-6'>
        <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <div className='flex items-center gap-3'>
            {icon && (
              <div className='rounded-md bg-gradient-to-br from-indigo-50 to-sky-50 p-2 ring-1 ring-indigo-500/10 dark:from-indigo-950/50 dark:to-sky-950/50 dark:ring-indigo-400/10'>
                {icon}
              </div>
            )}
            <div className='space-y-1'>
              <h3 className='text-xl font-semibold tracking-tight text-foreground'>
                {title}
              </h3>
              {description && (
                <p className='text-sm text-muted-foreground'>{description}</p>
              )}
            </div>
          </div>
          {date && (
            <div className='flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground'>
              {date}
            </div>
          )}
        </div>
        {children && <div className='space-y-4'>{children}</div>}
      </div>
    </div>
  )
}

// 재사용 가능한 서브 컴포넌트들
export function SectionSubtitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn('text-sm font-medium text-foreground', className)}
      {...props}>
      {children}
    </h4>
  )
}

export function SectionList({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn('space-y-2', className)}
      {...props}>
      {children}
    </ul>
  )
}

export function SectionListItem({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn(
        'flex items-start gap-2 text-sm text-muted-foreground',
        className
      )}
      {...props}>
      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70' />
      <span>{children}</span>
    </li>
  )
}
