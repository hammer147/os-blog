import './globals.css'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Office Scripts Blog',
  description: 'A blog about Office Scripts, Excel, Power Automate and more.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen dark:bg-slate-800'>
        <Navbar />
        <main className='prose prose-xl prose-slate mx-auto max-w-5xl px-4 dark:prose-invert md:px-6'>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
