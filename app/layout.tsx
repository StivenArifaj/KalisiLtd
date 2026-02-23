import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Kalisi Ltd | Reinforced Concrete & Steel Fixing Specialists London',
  description: "London's trusted reinforced concrete and steel fixing specialists. Expert groundworks, formwork, and structural concrete for residential, commercial, and industrial projects.",
}

export const viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kalisi Ltd",
              "description": "Reinforced Concrete & Steel Fixing Specialists in London",
              "url": "https://kalisi.co.uk",
              "telephone": "+447000000000",
              "email": "info@kalisi.co.uk",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "GB"
              },
              "areaServed": "London and South East England",
              "serviceType": [
                "Reinforced Concrete Works",
                "Steel Fixing Services",
                "Formwork & Shuttering",
                "Groundworks",
                "Structural Concrete Projects"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
