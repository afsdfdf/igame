"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Gamepad2, Menu, X, Wallet, Bell, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n/context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.pvp"), href: "/modes/pvp" },
    { name: t("nav.casual"), href: "/modes/casual" },
    { name: t("nav.team"), href: "/modes/team" },
    { name: t("nav.adventure"), href: "/modes/adventure" },
    { name: t("nav.lucky"), href: "/modes/lucky" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F0B1F]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Gamepad2 className="h-8 w-8 text-[#7D5FFF] group-hover:text-[#00FFF0] transition-colors" />
              <motion.div
                className="absolute -inset-1 bg-[#7D5FFF]/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <span className="ml-2 text-xl font-bold text-white group-hover:text-[#00FFF0] transition-colors">AIGAME</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${
                    pathname === link.href
                      ? "text-[#00FFF0]"
                      : "text-gray-300 hover:text-[#00FFF0]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00FFF0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                      pathname === link.href ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-300 hover:text-[#00FFF0] hover:bg-[#2A1F4A]/30"
              >
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-[#00FFF0] hover:bg-[#2A1F4A]/30"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button className="bg-[#7D5FFF] hover:bg-[#6A4FE0] text-white flex items-center space-x-2">
                <Wallet className="h-4 w-4" />
                <span>{t("common.connectWallet")}</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-[#2A1F4A]/50 p-2"
              aria-label="菜单"
            >
              <Menu className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
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
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium text-center transition-all duration-200 ${
                      pathname === link.href
                        ? "text-[#00FFF0] bg-[#2A1F4A]/50"
                        : "text-gray-300 hover:text-[#00FFF0] hover:bg-[#2A1F4A]/30"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 px-4 space-y-4">
                  <Button className="w-full bg-[#7D5FFF] hover:bg-[#6A4FE0] text-white py-6 text-lg flex items-center justify-center space-x-2">
                    <Wallet className="h-5 w-5" />
                    <span>{t("common.connectWallet")}</span>
                  </Button>
                  <div className="flex justify-center space-x-4">
                    <LanguageSwitcher />
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#00FFF0]">
                      <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#00FFF0]">
                      <User className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
