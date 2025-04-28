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
    return (
      <MobilePageWrapper
      mobileContent={<MobilePage />}
    >
      <main className="min-h-screen bg-black text-white overflow-hidden">
          {/* 桌面版内容，当检测到移动设备时不会渲染 */}
        <HeroSection />
          {/* 更多桌面版内容... */}
      </main>
    </MobilePageWrapper>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* 以下是桌面版内容 */}
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
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500 border hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-purple-400 drop-shadow-lg">Daily Rewards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedCounter value={250} suffix="+" className="text-3xl font-bold text-white mb-2" />
                    <p className="text-gray-300">tokens earned daily</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500 border hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-cyan-400 drop-shadow-lg">NFT Drops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedCounter value={50} suffix="+" className="text-3xl font-bold text-white mb-2" />
                    <p className="text-gray-300">unique NFTs to collect</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4">
                <GlowButton variant="purple">Start Earning Now</GlowButton>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50 transition-colors duration-300">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden border-2 border-emerald-500 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[360px] h-[360px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-xl opacity-50 blur-md animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-2">
                      <div className="relative w-full h-full">
                        <img 
                          src="/images/CosmicGuardian.png" 
                          alt="NFT Card" 
                          className="absolute w-[200px] h-[200px] object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 shadow-[0_0_20px_rgba(56,189,248,0.6)] rounded-lg animate-float z-30"
                        />
                        <img 
                          src="/images/DigitalWarrior.png" 
                          alt="NFT Card" 
                          className="absolute w-[180px] h-[180px] object-contain left-[35%] top-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-12 shadow-[0_0_20px_rgba(168,85,247,0.6)] rounded-lg animate-float-delayed z-20"
                        />
                        <img 
                          src="/images/CyberMage.png" 
                          alt="NFT Card" 
                          className="absolute w-[160px] h-[160px] object-contain left-[60%] top-[60%] -translate-x-1/2 -translate-y-1/2 rotate-6 shadow-[0_0_20px_rgba(251,146,60,0.6)] rounded-lg animate-float-slow z-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <AnimatedGradientText text="专属数字资产" className="text-4xl md:text-5xl font-bold mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              在AIGAME生态系统中收集、交易和使用强大的NFT
            </p>
          </div>

          <NFTShowcase />

          <div className="mt-16 text-center">
            <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs">NFT铸造</Badge>
            <GlowButton variant="pink">查看全部收藏</GlowButton>
          </div>
        </div>
      </section>

      {/* Game Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">GAME STATS</Badge>
            <AnimatedGradientText text="Game Statistics" className="text-4xl md:text-5xl font-bold mb-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-purple-800 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 mb-4">
                    <Users className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={25000} suffix="+" />
                  </h3>
                  <p className="text-gray-400">活跃玩家</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-cyan-800 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-4">
                    <Gamepad2 className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={1500000} suffix="+" />
                  </h3>
                  <p className="text-gray-400">游戏场次</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-800 hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 mb-4">
                    <svg className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={50000} suffix="+" />
                  </h3>
                  <p className="text-gray-400">SOL 赚取</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-pink-800 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 mb-4">
                    <svg className="h-8 w-8 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 7l10 10" />
                      <path d="M17 7l-10 10" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={75000} suffix="+" />
                  </h3>
                  <p className="text-gray-400">铸造的 NFT</p>
                </div>
              </CardContent>
            </Card>
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
            <AnimatedGradientText text="赚取有价值的奖励" className="text-4xl md:text-5xl font-bold mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              参加锦标赛和季节性活动以获得独家奖励
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group overflow-hidden border-2 border-yellow-600 rounded-xl bg-black/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-yellow-600/30"></div>
                <img 
                  src="/images/casual-gameplay.jpg"
                  alt="每周锦标赛"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">每周锦标赛</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6">与世界各地的玩家竞争代币奖品和独特的NFT</p>

                <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded-lg mb-4 backdrop-blur-sm">
                  <span className="text-yellow-300 font-medium">奖励</span>
                  <span className="text-white">5,000 个 AIGAME 代币</span>
                </div>

                <div className="flex justify-end">
                  <span className="text-yellow-400 flex items-center text-sm group-hover:underline transition-all">
                    查看详情 <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden border-2 border-yellow-600 rounded-xl bg-black/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-yellow-600/30"></div>
                <img 
                  src="/images/pvp-gameplay.jpg"
                  alt="月度锦标赛"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">月度锦标赛</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6">具有更高赌注和独家奖励的精英比赛</p>

                <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded-lg mb-4 backdrop-blur-sm">
                  <span className="text-yellow-300 font-medium">奖励</span>
                  <span className="text-white">25,000 个 AIGAME 代币 + 稀有 NFT</span>
                </div>

                <div className="flex justify-end">
                  <span className="text-yellow-400 flex items-center text-sm group-hover:underline transition-all">
                    查看详情 <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden border-2 border-yellow-600 rounded-xl bg-black/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-yellow-600/30"></div>
                <img 
                  src="/images/adventure-gameplay.jpg"
                  alt="季节性活动"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">季节性活动</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6">带有限量版收藏品的主题比赛</p>

                <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded-lg mb-4 backdrop-blur-sm">
                  <span className="text-yellow-300 font-medium">奖励</span>
                  <span className="text-white">100,000 个 AIGAME 代币 + 传奇 NFT</span>
                </div>

                <div className="flex justify-end">
                  <span className="text-yellow-400 flex items-center text-sm group-hover:underline transition-all">
                    查看详情 <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <GlowButton variant="yellow" className="text-black font-bold hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-300">
              加入 Next Tournament
            </GlowButton>
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
      
      {/* 移除重复的Footer组件，因为MobilePage组件已经包含了页脚 */}
    </main>
  )
}
