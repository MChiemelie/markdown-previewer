import { Assistant } from 'next/font/google'
import './globals.css'

const assistant = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Markdown Previewer',
  description: 'This project was built as on ethe the freeCodeCamp Projects for the Front End Development Libraries course and certification.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={assistant.className}>
        {children}
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" defer />
      </body>
    </html>
  )
}
