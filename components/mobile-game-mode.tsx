"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Compass, Gift, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const modeConfig = {
  pvp: {
    title: "home.features.pvp.title",
    description: "home.features.pvp.desc",
    icon: Trophy,
    image: "/images/game-mode-1.jpg",
    features: [
      "实时对战系统",
      "排名系统",
      "赛季奖励",
      "全球排行榜",
    ],
  },
  casual: {
    title: "home.features.casual.title",
    description: "home.features.casual.desc",
    icon: Users,
    image: "/images/game-mode-2.jpg",
    features: [
      "休闲玩法",
      "好友系统",
      "每日任务",
      "成就系统",
    ],
  },
  team: {
    title: "home.features.team.title",
    description: "home.features.team.desc",
    icon: Users,
    image: "/images/game-mode-1.jpg",
    features: [
      "团队匹配",
      "语音聊天",
      "战术配合",
      "团队奖励",
    ],
  },
  adventure: {
    title: "home.features.adventure.title",
    description: "home.features.adventure.desc",
    icon: Compass,
    image: "/images/game-mode-2.jpg",
    features: [
      "开放世界",
      "任务系统",
      "探索奖励",
      "剧情模式",
    ],
  },
  lucky: {
    title: "home.features.lucky.title",
    description: "home.features.lucky.desc",
    icon: Gift,
    image: "/images/game-mode-1.jpg",
    features: [
      "抽奖系统",
      "幸运值",
      "限时活动",
      "稀有奖励",
    ],
  },
}

export function MobileGameMode() {
  const params = useParams()
  const router = useRouter()
  const { t } = useLanguage()
  const mode = params.mode as keyof typeof modeConfig
  const config = modeConfig[mode]

  if (!config) {
    return <div>模式不存在</div>
  }

  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      {/* 顶部导航栏 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F0B1F]/90 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center h-14 px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-[#00FFF0] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="ml-4 text-lg font-medium text-white">{t(config.title)}</h1>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="pt-14 pb-20">
        {/* 模式封面 */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-56"
        >
          <Image
            src={config.image}
            alt={t(config.title)}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Icon className="h-8 w-8 text-[#00FFF0]" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white">{t(config.title)}</h2>
                <p className="text-gray-300 text-sm mt-1">{t(config.description)}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 模式特点 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="px-4 py-6 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">{t("gameMode.features")}</h3>
            <div className="grid grid-cols-1 gap-3">
              {config.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-[#1A1A1A] rounded-lg p-4 flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-[#00FFF0] rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 开始游戏按钮 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="w-full bg-[#7D5FFF] hover:bg-[#6A4FE0] text-white py-6 text-lg">
              {t("common.startGame")}
            </Button>
          </motion.div>

          {/* 游戏规则 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-white">{t("gameMode.rules")}</h3>
            <div className="bg-[#1A1A1A] rounded-xl p-4 space-y-4">
              {t("gameMode.rulesList").map((rule: string, index: number) => (
                <motion.p
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-gray-400 text-sm"
                >
                  {rule}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
} 