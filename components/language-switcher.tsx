"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="text-gray-300 hover:text-[#00FFF0]"
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">
        {language === "en" ? "Switch to Chinese" : "切换到英文"}
      </span>
      <span className="ml-2 text-sm">
        {language === "en" ? "EN" : "中文"}
      </span>
    </Button>
  )
} 