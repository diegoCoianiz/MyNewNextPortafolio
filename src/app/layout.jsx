import "@/styles/globals.css";

export const metadata = {
  title: 'Juan Diego | Portafolio',
  description: 'Portafolio personal. Juan Diego Coianiz. Fullstack dev.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className='page'>
        {children}
        </div>
      </body>
    </html>
  )
}