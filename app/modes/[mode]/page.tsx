"use client"

import { MobilePageWrapper } from "@/components/mobile-page-wrapper"
import { MobileGameMode } from "@/components/mobile-game-mode"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Compass, Gift } from "lucide-react"
import Image from "next/image"
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

// 桌面端内容组件
function DesktopGameModeContent() {
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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-[#00FFF0] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-white">{t(config.title)}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src={config.image}
              alt={t(config.title)}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-3">
                <Icon className="h-8 w-8 text-[#00FFF0]" />
                <h2 className="text-2xl font-bold text-white">{t(config.title)}</h2>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-white mb-4">{t("gameMode.features")}</h3>
              <div className="grid grid-cols-2 gap-4">
                {config.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#1A1A1A] rounded-lg p-4 flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-[#00FFF0] rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-[#7D5FFF] hover:bg-[#6A4FE0] text-white py-6 text-lg">
              {t("common.startGame")}
            </Button>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-medium text-white">{t("gameMode.rules")}</h3>
          <div className="bg-[#1A1A1A] rounded-xl p-6 space-y-4">
            {t("gameMode.rulesList").map((rule: string, index: number) => (
              <p key={index} className="text-gray-300">
                {rule}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GameModePage() {
  return (
    <MobilePageWrapper
      mobileContent={<MobileGameMode />}
    >
      <DesktopGameModeContent />
    </MobilePageWrapper>
  )
} 