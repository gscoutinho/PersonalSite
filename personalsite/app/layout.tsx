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
      <body>
      <header className='flex justify-between p-2'>
        <div>
          <h2>logotipo</h2>
        </div>

        <div className='flex justify-around gap-5'>
          {/* menu de navegação, sendo necessário aqui definir o que será preciso */}
          <span>About</span>
          <span>Feed</span>
          <span>Features</span>
        </div>
      </header>

        {children}

      </body>
    </html>
  )
}
