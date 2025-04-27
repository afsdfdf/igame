"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy, Users, Gamepad2, Mountain, Sparkles } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import AnimatedGradientText from "@/components/animated-gradient-text"
import GameModeCard from "@/components/game-mode-card"
import FloatingNFT from "@/components/floating-nft"
import AnimatedBackground from "@/components/animated-background"
import AnimatedCounter from "@/components/animated-counter"
import ParallaxSection from "@/components/parallax-section"
import GlowButton from "@/components/glow-button"
import NFTShowcase from "@/components/nft-showcase"
import RewardCard from "@/components/reward-card"
import GameStats from "@/components/game-stats"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import { useDevice } from "@/hooks/useDevice"
import { MobilePage } from "@/components/mobile-page"
import { MobilePageWrapper } from "@/components/mobile-page-wrapper"

export default function Home() {
  const { isMobile } = useDevice()

  if (isMobile) {
    return <MobilePageWrapper
      mobileContent={<MobilePage />}
    >
      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Game Modes Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">游戏模式</h2>
              <p className="text-xl text-gray-300">
                选择你喜欢的游戏模式开始体验
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/modes/pvp">
                <GameModeCard
                  title="竞技副本"
                  description="与其他玩家一决高下"
                  icon={<Trophy className="h-8 w-8 text-[#00FFF0]" />}
                  image="/images/game-mode-1.jpg"
                  color="from-yellow-600 to-orange-600"
                />
              </Link>

              <Link href="/modes/casual">
                <GameModeCard
                  title="娱乐副本"
                  description="轻松休闲的游戏体验"
                  icon={<Gamepad2 className="h-8 w-8 text-[#00FFF0]" />}
                  image="/images/game-mode-2.jpg"
                  color="from-blue-600 to-cyan-600"
                />
              </Link>

              <Link href="/modes/team">
                <GameModeCard
                  title="对战副本"
                  description="组队挑战，共同成长"
                  icon={<Users className="h-8 w-8 text-[#00FFF0]" />}
                  image="/images/game-mode-1.jpg"
                  color="from-green-600 to-emerald-600"
                />
              </Link>

              <Link href="/modes/adventure">
                <GameModeCard
                  title="冒险副本"
                  description="探索未知的游戏世界"
                  icon={<Mountain className="h-8 w-8 text-[#00FFF0]" />}
                  image="/images/game-mode-2.jpg"
                  color="from-purple-600 to-indigo-600"
                />
              </Link>

              <Link href="/modes/lucky">
                <GameModeCard
                  title="幸运副本"
                  description="测试你的运气"
                  icon={<Sparkles className="h-8 w-8 text-[#00FFF0]" />}
                  image="/images/game-mode-1.jpg"
                  color="from-pink-600 to-rose-600"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MobilePageWrapper>
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <HeroSection />

      {/* Game Modes Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">GAME MODES</Badge>
            <AnimatedGradientText text="5 Exciting Game Modes" className="text-4xl md:text-5xl font-bold mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore different ways to play, earn, and compete in the AIGAME ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link href="/modes/pvp">
              <GameModeCard
                title="PVP"
                icon={<Trophy className="h-8 w-8 text-yellow-400" />}
                description="Competitive battles against other players"
                color="from-yellow-600 to-orange-600"
                image="/images/pvp-hero.jpg"
              />
            </Link>

            <Link href="/modes/casual">
              <GameModeCard
                title="Casual"
                icon={<Gamepad2 className="h-8 w-8 text-blue-400" />}
                description="Relaxed gameplay with friends"
                color="from-blue-600 to-cyan-600"
                image="/images/casual-hero.jpg"
              />
            </Link>

            <Link href="/modes/team">
              <GameModeCard
                title="Team"
                icon={<Users className="h-8 w-8 text-green-400" />}
                description="Form alliances and battle together"
                color="from-green-600 to-emerald-600"
                image="/images/team-hero.jpg"
              />
            </Link>

            <Link href="/modes/adventure">
              <GameModeCard
                title="Adventure"
                icon={<Mountain className="h-8 w-8 text-purple-400" />}
                description="Explore vast worlds and complete quests"
                color="from-purple-600 to-indigo-600"
                image="/images/adventure-hero.jpg"
              />
            </Link>

            <Link href="/modes/lucky">
              <GameModeCard
                title="Lucky"
                icon={<Sparkles className="h-8 w-8 text-pink-400" />}
                description="Test your luck with random rewards"
                color="from-pink-600 to-rose-600"
                image="/images/lucky-hero.jpg"
              />
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/modes/pvp">
              <GlowButton>
                Explore All Game Modes <ArrowRight className="ml-2 h-4 w-4" />
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Play-to-Earn Section */}
      <ParallaxSection>
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-1">PLAY-TO-EARN</Badge>
              <AnimatedGradientText text="Earn While You Play" className="text-4xl md:text-5xl font-bold mb-6" />
              <p className="text-xl text-gray-300 mb-8">
                AIGAME's play-to-earn ecosystem rewards players with valuable NFTs and tokens that can be traded on the
                Solana blockchain.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500 border">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Daily Rewards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedCounter value={250} suffix="+" className="text-3xl font-bold text-white mb-2" />
                    <p className="text-gray-300">tokens earned daily</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500 border">
                  <CardHeader>
                    <CardTitle className="text-cyan-400">NFT Drops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedCounter value={50} suffix="+" className="text-3xl font-bold text-white mb-2" />
                    <p className="text-gray-300">unique NFTs to collect</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4">
                <GlowButton variant="purple">Start Earning Now</GlowButton>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative h-[500px]">
              <FloatingNFT />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* NFT Showcase Section */}
      <section className="py-24 relative bg-gradient-to-b from-black to-purple-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <ParticleBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-700 hover:bg-pink-800 text-white px-4 py-1">NFT COLLECTION</Badge>
            <AnimatedGradientText text="Exclusive Digital Assets" className="text-4xl md:text-5xl font-bold mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collect, trade, and utilize powerful NFTs within the AIGAME ecosystem
            </p>
          </div>

          <NFTShowcase />

          <div className="mt-16 text-center">
            <GlowButton variant="pink">View Full Collection</GlowButton>
          </div>
        </div>
      </section>

      {/* Game Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <GameStats />
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-24 relative bg-gradient-to-b from-black to-blue-950">
        <div className="absolute inset-0 z-0 opacity-20">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-1">REWARDS</Badge>
            <AnimatedGradientText text="Earn Valuable Rewards" className="text-4xl md:text-5xl font-bold mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compete in tournaments and seasonal events to earn exclusive rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RewardCard
              title="Weekly Tournaments"
              description="Compete against players worldwide for token prizes and unique NFTs"
              image="/images/game-mode-1.jpg"
              reward="5,000 AIGAME Tokens"
            />

            <RewardCard
              title="Monthly Championships"
              description="Elite competition with higher stakes and exclusive rewards"
              image="/images/game-mode-2.jpg"
              reward="25,000 AIGAME Tokens + Rare NFT"
            />

            <RewardCard
              title="Seasonal Events"
              description="Themed competitions with limited-edition collectibles"
              image="/images/game-mode-1.jpg"
              reward="100,000 AIGAME Tokens + Legendary NFT"
            />
          </div>

          <div className="mt-16 text-center">
            <GlowButton variant="yellow">Join Next Tournament</GlowButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedGradientText text="Ready to Join the Revolution?" className="text-5xl md:text-6xl font-bold mb-8" />
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Experience the future of gaming on the Solana blockchain. Play, earn, and collect in the AIGAME ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <GlowButton size="lg">Play Now</GlowButton>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
