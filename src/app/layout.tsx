import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'] })

export const metadata: Metadata = {
  title: 'Wanderlust Adventures',
  description: 'Explore the world with our amazing travel experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

