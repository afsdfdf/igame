"use client"

import { useDevice } from "@/hooks/useDevice"
import { MobileNav } from "@/components/mobile-nav"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

export function MobileLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = useDevice()

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* 桌面端导航 */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      {/* 移动端导航 */}
      <div className="md:hidden">
        <MobileNav />
      </div>
      <main className="flex-1 pt-14 md:pt-16 pb-16 md:pb-0">
        {children}
      </main>
      {/* 页脚 - 只在桌面端显示 */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  )
} 