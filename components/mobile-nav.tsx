"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gamepad2, Menu, X, Wallet, Bell, User, Home, Trophy, Users, Compass, Gift } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "首页", href: "/", icon: Home },
    { name: "竞技副本", href: "/modes/pvp", icon: Trophy },
    { name: "娱乐副本", href: "/modes/casual", icon: Users },
    { name: "对战副本", href: "/modes/team", icon: Users },
    { name: "冒险副本", href: "/modes/adventure", icon: Compass },
    { name: "幸运副本", href: "/modes/lucky", icon: Gift },
  ]

  return (
    <>
      {/* 底部导航栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0F0B1F]/90 backdrop-blur-md border-t border-gray-800 md:hidden">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center w-full h-full ${
                  pathname === item.href
                    ? "text-[#00FFF0]"
                    : "text-gray-400 hover:text-[#00FFF0]"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* 顶部导航栏 */}
      <div className="fixed top-0 left-0 right-0 bg-[#0F0B1F]/90 backdrop-blur-md border-b border-gray-800 md:hidden">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center">
            <Gamepad2 className="h-6 w-6 text-[#7D5FFF]" />
            <span className="ml-2 text-lg font-bold text-white">AIGAME</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-[#00FFF0]"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-[#00FFF0]"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-[#00FFF0]"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* 侧边菜单 */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-[#2A1F4A]/50"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 py-6 space-y-6">
                <Button className="w-full bg-[#7D5FFF] hover:bg-[#6A4FE0] text-white py-6 text-lg flex items-center justify-center space-x-2">
                  <Wallet className="h-5 w-5" />
                  <span>连接钱包</span>
                </Button>
                <div className="space-y-4">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium ${
                          pathname === item.href
                            ? "text-[#00FFF0] bg-[#2A1F4A]/50"
                            : "text-gray-300 hover:text-[#00FFF0] hover:bg-[#2A1F4A]/30"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 