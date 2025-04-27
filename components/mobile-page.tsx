"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Compass, Gift } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function MobilePage() {
  const { t } = useLanguage()

  const gameModes = [
    {
      title: t("home.features.pvp.title"),
      description: t("home.features.pvp.desc"),
      icon: Trophy,
      image: "/images/game-mode-1.jpg",
    },
    {
      title: t("home.features.casual.title"),
      description: t("home.features.casual.desc"),
      icon: Users,
      image: "/images/game-mode-2.jpg",
    },
    {
      title: t("home.features.adventure.title"),
      description: t("home.features.adventure.desc"),
      icon: Compass,
      image: "/images/game-mode-1.jpg",
    },
    {
      title: t("home.features.lucky.title"),
      description: t("home.features.lucky.desc"),
      icon: Gift,
      image: "/images/game-mode-2.jpg",
    },
  ]

  return (
    <div className="px-4 py-6 space-y-8 pb-20">
      {/* 英雄区域 */}
      <div className="relative h-[40vh] rounded-2xl overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-3xl font-bold text-white mb-2">{t("home.title")}</h1>
          <p className="text-gray-300 mb-4">{t("home.subtitle")}</p>
          <Button className="w-full bg-[#7D5FFF] hover:bg-[#6A4FE0] text-white">
            {t("common.startGame")}
          </Button>
        </div>
      </div>

      {/* 游戏模式 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">{t("home.gameModes")}</h2>
        <div className="grid grid-cols-2 gap-4">
          {gameModes.map((mode, index) => {
            const Icon = mode.icon
            return (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative h-40 rounded-xl overflow-hidden group"
              >
                <Image
                  src={mode.image}
                  alt={mode.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon className="h-5 w-5 text-[#00FFF0]" />
                    <h3 className="text-white font-medium">{mode.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{mode.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* 游戏统计 */}
      <div className="bg-[#1A1A1A] rounded-xl p-4">
        <h2 className="text-xl font-bold text-white mb-4">{t("home.stats.totalPlayers")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2A1F4A] rounded-lg p-4">
            <p className="text-gray-400 text-sm">{t("home.stats.totalPlayers")}</p>
            <p className="text-2xl font-bold text-white">10,000+</p>
          </div>
          <div className="bg-[#2A1F4A] rounded-lg p-4">
            <p className="text-gray-400 text-sm">{t("home.stats.totalGames")}</p>
            <p className="text-2xl font-bold text-white">50,000+</p>
          </div>
        </div>
      </div>

      {/* 最新活动 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">最新活动</h2>
        <div className="bg-[#1A1A1A] rounded-xl p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-2 h-2 bg-[#00FFF0] rounded-full" />
            <p className="text-white font-medium">新赛季开启</p>
          </div>
          <p className="text-gray-400 text-sm">
            新赛季已经开始，参与游戏即可获得丰厚奖励！
          </p>
        </div>
      </div>
    </div>
  )
} 