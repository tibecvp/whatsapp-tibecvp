import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { ConvexClientProvider } from "@/providers/convex-client-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "WhatsApp - Tibecvp",
  description: "WhatsApp clone created by tibecvp using NextJS, TypeScript, and Tailwind.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >

        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}
