import './globals.css'
import { Inter } from 'next/font/google'

// Redux
import { Provider } from 'react-redux'
import store from './store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>    
    </html>
  )
}
