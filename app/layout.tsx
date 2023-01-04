import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body className='bg-zinc-900 p-4 md:w-4/5 lg:w-3/5 mx-auto'>
      <Navigation />
      {children}
      <Footer />
      </body>
    </html>
  )
}
