"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Swords, Shield, Star, Clock, Users } from "lucide-react"
import ModeFeature from "@/components/mode-feature"
import GlowButton from "@/components/glow-button"
import AnimatedGradientText from "@/components/animated-gradient-text"
import Footer from "@/components/footer"
import { useDevice } from "@/hooks/useDevice"
import { MobilePageWrapper } from "@/components/mobile-page-wrapper"
import MobileModePage from "@/components/mobile-mode-page"

export default function PVPModePage() {
  const { isMobile } = useDevice()

  if (isMobile) {
    return (
      <MobilePageWrapper
        mobileContent={
          <>
            <MobileModePage
              title="竞技副本"
              description="与其他玩家一决高下，在实时对战中测试你的技能。攀登排名，获得奖励，成为 AIGAME 宇宙中的传奇。"
              heroImage="/images/pvp-hero.jpg"
              badgeColor="bg-yellow-700 hover:bg-yellow-800"
              features={[
                {
                  icon: <Trophy className="h-6 w-6 text-yellow-400" />,
                  title: "排位赛",
                  description: "基于技能匹配，攀登全球排行榜。"
                },
                {
                  icon: <Swords className="h-6 w-6 text-yellow-400" />,
                  title: "大逃杀",
                  description: "在激烈的多人对决中成为最后的幸存者。"
                },
                {
                  icon: <Shield className="h-6 w-6 text-yellow-400" />,
                  title: "锦标赛模式",
                  description: "每周和每月锦标赛，丰厚的 SOL 奖金池。"
                }
              ]}
              gameplayImage="/images/pvp-gameplay.jpg"
              gameplayTitle="掌握竞技场"
              gameplayDescription="PVP 模式提供激烈的实时对战，策略、技能和快速思维决定胜负。选择你的角色，自定义你的装备，与世界各地的玩家对战。"
              gameplayFeatures={[
                {
                  icon: <Star className="h-5 w-5 text-yellow-400" />,
                  title: "技能匹配",
                  description: "始终与技能水平相近的玩家匹配，确保公平竞争。"
                },
                {
                  icon: <Clock className="h-5 w-5 text-yellow-400" />,
                  title: "快速对战",
                  description: "3-5 分钟的快速对战，适合短时间游戏。"
                },
                {
                  icon: <Users className="h-5 w-5 text-yellow-400" />,
                  title: "多种游戏类型",
                  description: "1v1 决斗、2v2 团队战和 4 人自由对战。"
                }
              ]}
            />
          </>
        }
      >
        <main className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center">
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full">
                <Image src="/images/pvp-hero.jpg" alt="PVP Mode" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <Badge className="mb-4 bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-1">PVP MODE</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <AnimatedGradientText text="Competitive Arena" />
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Test your skills against other players in real-time battles. Climb the ranks, earn rewards, and become a
                legend in the AIGAME universe.
              </p>
              <div className="flex flex-wrap gap-4">
                <GlowButton variant="yellow">Enter Arena</GlowButton>
                <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/50">
                  View Leaderboards
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-black to-yellow-950/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">PVP Features</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ModeFeature
                  icon={<Trophy className="h-6 w-6 text-yellow-400" />}
                  title="Ranked Matches"
                  description="Compete in skill-based matchmaking and climb the global leaderboards."
                  color="from-yellow-500/20 to-orange-500/20"
                />

                <ModeFeature
                  icon={<Swords className="h-6 w-6 text-yellow-400" />}
                  title="Battle Royale"
                  description="Last player standing wins in this intense multiplayer showdown."
                  color="from-yellow-500/20 to-orange-500/20"
                />

                <ModeFeature
                  icon={<Shield className="h-6 w-6 text-yellow-400" />}
                  title="Tournament Mode"
                  description="Weekly and monthly tournaments with massive SOL prize pools."
                  color="from-yellow-500/20 to-orange-500/20"
                />
              </div>
            </div>
          </section>

          {/* Gameplay Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="mb-4 bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-1">GAMEPLAY</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Master the Arena</h2>
                  <p className="text-gray-300 mb-8">
                    PVP mode offers intense real-time battles where strategy, skill, and quick thinking determine the
                    victor. Choose your character, customize your loadout, and face off against players from around the
                    world.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-yellow-500/20 rounded-full">
                        <Star className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Skill-Based Matchmaking</h3>
                        <p className="text-gray-400">
                          Always matched with players of similar skill level for fair competition.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-yellow-500/20 rounded-full">
                        <Clock className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Quick Matches</h3>
                        <p className="text-gray-400">Fast-paced 3-5 minute battles perfect for quick gaming sessions.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-yellow-500/20 rounded-full">
                        <Users className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Multiple Game Types</h3>
                        <p className="text-gray-400">1v1 duels, 2v2 team battles, and 4-player free-for-all matches.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/images/pvp-gameplay.jpg" alt="PVP Gameplay" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">Live Tournaments</h3>
                    <p className="text-gray-300">Join weekly tournaments with real-time spectating and commentary.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </MobilePageWrapper>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image src="/images/pvp-hero.jpg" alt="PVP Mode" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-1">PVP MODE</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <AnimatedGradientText text="Competitive Arena" />
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Test your skills against other players in real-time battles. Climb the ranks, earn rewards, and become a
            legend in the AIGAME universe.
          </p>
          <div className="flex flex-wrap gap-4">
            <GlowButton variant="yellow">Enter Arena</GlowButton>
            <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-950/50">
              View Leaderboards
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">PVP Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModeFeature
              icon={<Trophy className="h-6 w-6 text-yellow-400" />}
              title="Ranked Matches"
              description="Compete in skill-based matchmaking and climb the global leaderboards."
              color="from-yellow-500/20 to-orange-500/20"
            />

            <ModeFeature
              icon={<Swords className="h-6 w-6 text-yellow-400" />}
              title="Battle Royale"
              description="Last player standing wins in this intense multiplayer showdown."
              color="from-yellow-500/20 to-orange-500/20"
            />

            <ModeFeature
              icon={<Shield className="h-6 w-6 text-yellow-400" />}
              title="Tournament Mode"
              description="Weekly and monthly tournaments with massive SOL prize pools."
              color="from-yellow-500/20 to-orange-500/20"
            />
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-1">GAMEPLAY</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Master the Arena</h2>
              <p className="text-gray-300 mb-8">
                PVP mode offers intense real-time battles where strategy, skill, and quick thinking determine the
                victor. Choose your character, customize your loadout, and face off against players from around the
                world.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-yellow-500/20 rounded-full">
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Skill-Based Matchmaking</h3>
                    <p className="text-gray-400">
                      Always matched with players of similar skill level for fair competition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-yellow-500/20 rounded-full">
                    <Clock className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Quick Matches</h3>
                    <p className="text-gray-400">Fast-paced 3-5 minute battles perfect for quick gaming sessions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-yellow-500/20 rounded-full">
                    <Users className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Multiple Game Types</h3>
                    <p className="text-gray-400">1v1 duels, 2v2 team battles, and 4-player free-for-all matches.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/pvp-gameplay.jpg" alt="PVP Gameplay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">Live Tournaments</h3>
                <p className="text-gray-300">Join weekly tournaments with real-time spectating and commentary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
