import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='ko'
      suppressHydrationWarning
      data-theme='light'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
        />
      </head>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange>
          <div className='fixed right-4 top-4 z-50'>
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
