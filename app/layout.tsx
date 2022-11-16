import '../styles/globals.css'
import Navbar from './Components/Navbar/Navbar'
import { Inter } from "@next/font/google"

const inter = Inter();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className='bg-gray-300'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
