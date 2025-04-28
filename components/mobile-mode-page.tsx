import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Swords, Shield, Star, Clock, Users } from "lucide-react"
import ModeFeature from "@/components/mode-feature"
import GlowButton from "@/components/glow-button"
import AnimatedGradientText from "@/components/animated-gradient-text"
import Footer from "@/components/footer"

interface MobileModePageProps {
  title: string
  description: string
  heroImage: string
  badgeColor: string
  features: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
  gameplayImage: string
  gameplayTitle: string
  gameplayDescription: string
  gameplayFeatures: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
  rewards: {
    title: string
    description: string
    rarity: string
    bonus: string
  }[]
}

export default function MobileModePage({
  title,
  description,
  heroImage,
  badgeColor,
  features,
  gameplayImage,
  gameplayTitle,
  gameplayDescription,
  gameplayFeatures,
  rewards,
}: MobileModePageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image src={heroImage} alt={title} fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Badge className={`mb-4 ${badgeColor} text-white px-4 py-1`}>{title.toUpperCase()}</Badge>
          <h1 className="text-3xl font-bold mb-4">
            <AnimatedGradientText text={title} />
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            <GlowButton>开始游戏</GlowButton>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              查看排行榜
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-black to-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">游戏特色</h2>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-white/10 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div>
              <Badge className={`mb-4 ${badgeColor} text-white px-4 py-1`}>游戏玩法</Badge>
              <h2 className="text-2xl font-bold mb-4">{gameplayTitle}</h2>
              <p className="text-gray-300 mb-6">
                {gameplayDescription}
              </p>

              <div className="space-y-4">
                {gameplayFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 p-2 bg-white/10 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image src={gameplayImage} alt="Gameplay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold mb-1">实时对战</h3>
                <p className="text-gray-300 text-sm">加入每周锦标赛，实时观战和评论</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}