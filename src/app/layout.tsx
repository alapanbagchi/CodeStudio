"use client"
import { NextPageContext } from 'next'
import Header from './components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='mainbody'>
          {children}
        </main>
      </body>
    </html>
  )
}

