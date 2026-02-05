import '../globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Santa casa | Pre-Agendamento',
  description: ''
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
