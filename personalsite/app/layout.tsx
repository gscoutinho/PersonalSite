import NavBar from './components/NavBar'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Patrono: Gabriel Coutinho',
  description: 'Personal site of Gabriel Coutinho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt">
      <body className='bg-slate-300'>
        <header className='flex justify-between w-screen p-2'>
          <NavBar></NavBar>
        </header>

        {children}

      </body>
    </html>
  )
}
