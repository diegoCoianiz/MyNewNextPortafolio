import '../styles/globals.css'

export const metadata = {
  title: 'Juan Diego | Portafolio',
  description: 'Portafolio personal. Juan Diego Coianiz. Fullstack dev.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='background'>
          <div className='blocks'  style={{ "--i": "1" }}></div>
          <div className='blocks'  style={{ "--i": "2" }}></div>
          <div className='blocks'  style={{ "--i": "3" }}></div>
        </div>
        <div className='page'>
        {children}
        </div>
      </body>
    </html>
  )
}
