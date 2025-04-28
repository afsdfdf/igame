"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Sparkles, Users, Clock, Puzzle } from "lucide-react"
import ModeFeature from "@/components/mode-feature"
import GlowButton from "@/components/glow-button"
import AnimatedGradientText from "@/components/animated-gradient-text"
import Footer from "@/components/footer"
import { useDevice } from "@/hooks/useDevice"
import { MobilePageWrapper } from "@/components/mobile-page-wrapper"
import MobileModePage from "@/components/mobile-mode-page"

export default function CasualModePage() {
  const { isMobile } = useDevice()

  if (isMobile) {
    return (
      <MobilePageWrapper
        mobileContent={
          <>
            <MobileModePage
              title="娱乐副本"
              description="与朋友一起享受轻松愉快的游戏，或独自放松。按照自己的节奏获得奖励。"
              heroImage="/images/casual-hero.jpg"
              badgeColor="bg-blue-700 hover:bg-blue-800"
              features={[
                {
                  icon: <Gamepad2 className="h-6 w-6 text-blue-400" />,
                  title: "迷你游戏",
                  description: "快速有趣的游戏，适合短时间游戏。"
                },
                {
                  icon: <Sparkles className="h-6 w-6 text-blue-400" />,
                  title: "NFT 碎片",
                  description: "收集特殊碎片，可以组合成有价值的 NFT。"
                },
                {
                  icon: <Users className="h-6 w-6 text-blue-400" />,
                  title: "社交游戏",
                  description: "与朋友一起玩，获得团队活动奖励。"
                }
              ]}
              gameplayImage="/images/casual-gameplay.jpg"
              gameplayTitle="轻松游戏体验"
              gameplayDescription="娱乐模式提供各种轻松愉快的游戏，专为娱乐和放松而设计。适合新玩家或想要放松同时获得奖励的玩家。"
              gameplayFeatures={[
                {
                  icon: <Clock className="h-5 w-5 text-blue-400" />,
                  title: "快速游戏",
                  description: "1-3 分钟即可完成的游戏，适合随时随地的游戏。"
                },
                {
                  icon: <Puzzle className="h-5 w-5 text-blue-400" />,
                  title: "多样游戏",
                  description: "从益智游戏到卡牌游戏，总有一款适合你。"
                },
                {
                  icon: <Sparkles className="h-5 w-5 text-blue-400" />,
                  title: "每日奖励",
                  description: "每日登录获得特殊奖励和碎片掉落。"
                }
              ]}
              rewards={[]}
            />
          </>
        }
      >
        <main className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center">
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full">
                <Image src="/images/casual-hero.jpg" alt="Casual Mode" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <Badge className="mb-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1">CASUAL MODE</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <AnimatedGradientText text="Fun & Relaxed Gaming" />
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Enjoy light-hearted games with friends or solo. Perfect for unwinding while still earning rewards at your
                own pace.
              </p>
              <div className="flex flex-wrap gap-4">
                <GlowButton variant="cyan">Play Now</GlowButton>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/50">
                  Browse Games
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Casual Features</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ModeFeature
                  icon={<Gamepad2 className="h-6 w-6 text-blue-400" />}
                  title="Mini-Games"
                  description="Quick and fun games that can be played in short sessions."
                  color="from-blue-500/20 to-cyan-500/20"
                />

                <ModeFeature
                  icon={<Sparkles className="h-6 w-6 text-blue-400" />}
                  title="NFT Fragments"
                  description="Collect special fragments that can be combined into valuable NFTs."
                  color="from-blue-500/20 to-cyan-500/20"
                />

                <ModeFeature
                  icon={<Users className="h-6 w-6 text-blue-400" />}
                  title="Social Gaming"
                  description="Play with friends and earn bonus rewards for group activities."
                  color="from-blue-500/20 to-cyan-500/20"
                />
              </div>
            </div>
          </section>

          {/* Gameplay Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1">GAMEPLAY</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Relaxed Gaming Experience</h2>
                  <p className="text-gray-300 mb-8">
                    Casual mode offers a variety of light-hearted games designed for fun and relaxation. Perfect for new
                    players or those looking to unwind while still earning rewards.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-blue-500/20 rounded-full">
                        <Clock className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Quick Play Sessions</h3>
                        <p className="text-gray-400">
                          Games designed to be completed in 1-3 minutes, perfect for on-the-go gaming.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-blue-500/20 rounded-full">
                        <Puzzle className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Variety of Games</h3>
                        <p className="text-gray-400">From puzzles to card games, there's something for everyone.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-blue-500/20 rounded-full">
                        <Sparkles className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Daily Rewards</h3>
                        <p className="text-gray-400">Log in daily to receive special bonuses and fragment drops.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/images/casual-gameplay.jpg" alt="Casual Gameplay" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">Featured Games</h3>
                    <p className="text-gray-300">New casual games added weekly with special limited-time rewards.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Games Showcase */}
          <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Popular Casual Games</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Crypto Puzzler", players: "5,432", reward: "Fragment NFTs" },
                  { title: "Card Collector", players: "8,765", reward: "Rare Cards" },
                  { title: "Block Builder", players: "3,210", reward: "Building Materials" },
                ].map((game, index) => (
                  <Card
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0">
                        <div className="w-full h-full relative">
                          <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                            {game.title}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-400 flex items-center">
                          <Users className="h-4 w-4 mr-1" /> {game.players} players
                        </span>
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Casual</Badge>
                      </div>
                      <div className="bg-blue-900/20 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-300">Rewards:</span>
                          <span className="text-sm text-blue-300">{game.reward}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <GlowButton variant="cyan">View All Casual Games</GlowButton>
              </div>
            </div>
          </section>

          {/* NFT Fragments Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1">NFT FRAGMENTS</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Collect & Combine</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Earn fragment NFTs through casual gameplay and combine them to create powerful items and collectibles.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg overflow-hidden border border-blue-500/30 group"
                  >
                    <div className="absolute inset-0">
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                          Fragment {i}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold mb-1">Fragment Tier {i}</h3>
                      <p className="text-gray-300 text-sm">
                        {i === 4
                          ? "Legendary fragment with unique effects"
                          : i === 3
                          ? "Epic fragment with powerful bonuses"
                          : i === 2
                          ? "Rare fragment with special abilities"
                          : "Common fragment with basic effects"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <GlowButton variant="cyan">View All Fragments</GlowButton>
              </div>
            </div>
          </section>
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
            <Image src="/images/casual-hero.jpg" alt="Casual Mode" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1">CASUAL MODE</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <AnimatedGradientText text="Fun & Relaxed Gaming" />
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Enjoy light-hearted games with friends or solo. Perfect for unwinding while still earning rewards at your
            own pace.
          </p>
          <div className="flex flex-wrap gap-4">
            <GlowButton variant="cyan">Play Now</GlowButton>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/50">
              Browse Games
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Casual Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModeFeature
              icon={<Gamepad2 className="h-6 w-6 text-blue-400" />}
              title="Mini-Games"
              description="Quick and fun games that can be played in short sessions."
              color="from-blue-500/20 to-cyan-500/20"
            />

            <ModeFeature
              icon={<Sparkles className="h-6 w-6 text-blue-400" />}
              title="NFT Fragments"
              description="Collect special fragments that can be combined into valuable NFTs."
              color="from-blue-500/20 to-cyan-500/20"
            />

            <ModeFeature
              icon={<Users className="h-6 w-6 text-blue-400" />}
              title="Social Gaming"
              description="Play with friends and earn bonus rewards for group activities."
              color="from-blue-500/20 to-cyan-500/20"
            />
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1">GAMEPLAY</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Relaxed Gaming Experience</h2>
              <p className="text-gray-300 mb-8">
                Casual mode offers a variety of light-hearted games designed for fun and relaxation. Perfect for new
                players or those looking to unwind while still earning rewards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-blue-500/20 rounded-full">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Quick Play Sessions</h3>
                    <p className="text-gray-400">
                      Games designed to be completed in 1-3 minutes, perfect for on-the-go gaming.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-blue-500/20 rounded-full">
                    <Puzzle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Variety of Games</h3>
                    <p className="text-gray-400">From puzzles to card games, there's something for everyone.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-blue-500/20 rounded-full">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Daily Rewards</h3>
                    <p className="text-gray-400">Log in daily to receive special bonuses and fragment drops.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/casual-gameplay.jpg" alt="Casual Gameplay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">Featured Games</h3>
                <p className="text-gray-300">New casual games added weekly with special limited-time rewards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Casual Games</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Crypto Puzzler", players: "5,432", reward: "Fragment NFTs" },
              { title: "Card Collector", players: "8,765", reward: "Rare Cards" },
              { title: "Block Builder", players: "3,210", reward: "Building Materials" },
            ].map((game, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0">
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                        {game.title}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="h-4 w-4 mr-1" /> {game.players} players
                    </span>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Casual</Badge>
                  </div>
                  <div className="bg-blue-900/20 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Rewards:</span>
                      <span className="text-sm text-blue-300">{game.reward}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GlowButton variant="cyan">View All Casual Games</GlowButton>
          </div>
        </div>
      </section>

      {/* NFT Fragments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1">NFT FRAGMENTS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Collect & Combine</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Earn fragment NFTs through casual gameplay and combine them to create powerful items and collectibles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden border border-blue-500/30 group"
              >
                <div className="absolute inset-0">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                      Fragment {i}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold mb-1">Fragment Tier {i}</h3>
                  <p className="text-gray-300 text-sm">
                    {i === 4
                      ? "Legendary fragment with unique effects"
                      : i === 3
                      ? "Epic fragment with powerful bonuses"
                      : i === 2
                      ? "Rare fragment with special abilities"
                      : "Common fragment with basic effects"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <GlowButton variant="cyan">View All Fragments</GlowButton>
          </div>
        </div>
      </section>
    </main>
  )
}
