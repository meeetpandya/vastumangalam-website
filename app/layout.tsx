import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Vastu Mangalam | Harmonising Spaces, Enhancing Lives',
  description: 'Thoughtful Vastu Shastra consultancy for homes, businesses and land across India.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5ee',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
