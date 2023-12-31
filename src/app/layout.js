import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'] ,weight: ['400', '500', '700']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-4xl mx-auto p-4'>
          {/* maxwidth is 6xl of container i.e. 1152px */}
          {/* mx-auto adjust the margin automatically so that the content is centered*/}
          {/* mx means margin in x direction while p means padding in all directions */}
          {children}
        </main>
      </body>
    </html>
  )
}
