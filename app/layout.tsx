import type { Metadata, Viewport } from 'next'
import { Lora, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Éclat Auto Dijon | Detailing & Rénovation Esthétique Automobile',
  description: 'Expert en detailing à Dijon. Rénovation carrosserie, lavage premium intérieur, traitement céramique et protection longue durée pour véhicules d\'exception.',
  keywords: ['detailing dijon', 'nettoyage voiture dijon', 'rénovation esthétique automobile', 'traitement céramique dijon', 'lavage auto premium'],
  authors: [{ name: 'Éclat Auto Dijon' }],
  openGraph: {
    title: 'Éclat Auto Dijon | Rénovation Esthétique Automobile',
    description: 'Redonnez à votre véhicule son éclat d\'origine avec nos services de detailing à Dijon.',
    url: 'https://eclatautodijon.fr',
    siteName: 'Éclat Auto Dijon',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-512.svg',
        type: 'image/svg+xml',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/icon-512.svg',
        type: 'image/svg+xml',
        sizes: '512x512',
      },
    ],
    shortcut: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#F9F8F5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" translate="no" suppressHydrationWarning className={`${lora.variable} ${plusJakarta.variable} bg-background`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
