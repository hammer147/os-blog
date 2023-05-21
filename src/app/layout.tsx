import './globals.css'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Office Scripts Blog',
  description: 'A blog about Office Scripts, Excel, Power Automate and more.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-800 min-h-screen'>
        <Navbar />
        <main className='max-w-5xl prose prose-xl prose-slate dark:prose-invert mx-auto px-4 md:px-6'>
          {children}
        </main>
      </body>
    </html>
  )
}
