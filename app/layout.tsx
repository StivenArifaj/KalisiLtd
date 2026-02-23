import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Kalisi Ltd | Reinforced Concrete & Steel Fixing Specialists London',
  description: "London and Cornwall's trusted reinforced concrete and steel fixing specialists. Expert formwork and structural concrete for residential, commercial, and industrial projects.",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
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
              "description": "Reinforced Concrete & Steel Fixing Specialists in London & Cornwall",
              "url": "https://kalisi.co.uk",
              "telephone": ["+447351635413", "+447915590842"],
              "email": ["erion_cena@icloud.com", "cenajmanuel@icloud.com"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressRegion": "Cornwall",
                "addressCountry": "GB"
              },
              "areaServed": "London and Cornwall",
              "serviceType": [
                "Reinforced Concrete Works",
                "Steel Fixing Services",
                "Formwork & Shuttering",
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
