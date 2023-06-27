import './globals.scss'
import { Roboto } from 'next/font/google'
import Page from './page'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
}) 

export const metadata = {
  title: 'Newsletter Sign Up',
  description: 'Frontend mentor challenge | Junior level',
  generator: 'Next.js',
  applicationName: 'Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'Frontend', 'Frontend challenge', 'webdeveloper'],
  creator: 'Gabriel Crispim',
  publisher: 'Gabriel Crispim',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Page />
      </body>
    </html>
  )
}
