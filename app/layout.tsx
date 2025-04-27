import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileLayout } from "@/components/mobile-layout"
import { LanguageProvider } from "@/lib/i18n/context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIGAME - SOL链上游戏生态",
  description: "五大副本 × 链上打金 × 账号交易，基于Solana链的去中心化游戏生态平台",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <MobileLayout>{children}</MobileLayout>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
