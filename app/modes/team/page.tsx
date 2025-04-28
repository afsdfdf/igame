"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Swords, Trophy, Target, Flag } from "lucide-react"
import ModeFeature from "@/components/mode-feature"
import GlowButton from "@/components/glow-button"
import AnimatedGradientText from "@/components/animated-gradient-text"
import Footer from "@/components/footer"
import { useDevice } from "@/hooks/useDevice"
import { MobilePageWrapper } from "@/components/mobile-page-wrapper"
import MobileModePage from "@/components/mobile-mode-page"

export default function TeamModePage() {
  const { isMobile } = useDevice()

  if (isMobile) {
    return (
      <MobilePageWrapper
        mobileContent={
          <>
            <MobileModePage
              title="对战副本"
              description="组建联盟，协调策略，一起主宰战场。团队游戏玩法，共享奖励和成就。"
              heroImage="/images/team-hero.jpg"
              badgeColor="bg-green-700 hover:bg-green-800"
              features={[
                {
                  icon: <Users className="h-6 w-6 text-green-400" />,
                  title: "小队组建",
                  description: "创建或加入 2-5 人的团队，技能互补。"
                },
                {
                  icon: <Shield className="h-6 w-6 text-green-400" />,
                  title: "角色专精",
                  description: "选择具有独特能力和协同效应的专业角色。"
                },
                {
                  icon: <Trophy className="h-6 w-6 text-green-400" />,
                  title: "团队排名",
                  description: "攀登全球团队排行榜，获得专属奖励。"
                }
              ]}
              gameplayImage="/images/team-gameplay.jpg"
              gameplayTitle="协调制胜"
              gameplayDescription="团队模式强调协调、策略和角色专精。与你的小队一起完成目标，克服单人无法完成的挑战。"
              gameplayFeatures={[
                {
                  icon: <Target className="h-5 w-5 text-green-400" />,
                  title: "目标导向任务",
                  description: "完成需要团队合作和协调的战略目标。"
                },
                {
                  icon: <Swords className="h-5 w-5 text-green-400" />,
                  title: "团队对战",
                  description: "在激烈的 5v5 竞技比赛中与其他小队竞争。"
                },
                {
                  icon: <Flag className="h-5 w-5 text-green-400" />,
                  title: "领土控制",
                  description: "占领并控制战略点，为团队获得被动奖励。"
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
                <Image src="/images/team-hero.jpg" alt="Team Mode" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <Badge className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-1">TEAM MODE</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <AnimatedGradientText text="Strategic Team Play" />
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Form alliances, coordinate strategies, and dominate the battlefield together. Team-based gameplay with
                shared rewards and achievements.
              </p>
              <div className="flex flex-wrap gap-4">
                <GlowButton variant="cyan">Find Team</GlowButton>
                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-950/50">
                  Create Squad
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Team Features</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ModeFeature
                  icon={<Users className="h-6 w-6 text-green-400" />}
                  title="Squad Formation"
                  description="Create or join teams of 2-5 players with complementary skills."
                  color="from-green-500/20 to-emerald-500/20"
                />

                <ModeFeature
                  icon={<Shield className="h-6 w-6 text-green-400" />}
                  title="Role Specialization"
                  description="Choose specialized roles with unique abilities and synergies."
                  color="from-green-500/20 to-emerald-500/20"
                />

                <ModeFeature
                  icon={<Trophy className="h-6 w-6 text-green-400" />}
                  title="Team Rankings"
                  description="Climb the global team leaderboards and earn exclusive rewards."
                  color="from-green-500/20 to-emerald-500/20"
                />
              </div>
            </div>
          </section>

          {/* Gameplay Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-1">GAMEPLAY</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Coordinate to Dominate</h2>
                  <p className="text-gray-300 mb-8">
                    Team mode emphasizes coordination, strategy, and role specialization. Work together with your squad to
                    complete objectives and overcome challenges that would be impossible alone.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-green-500/20 rounded-full">
                        <Target className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Objective-Based Missions</h3>
                        <p className="text-gray-400">
                          Complete strategic objectives that require teamwork and coordination.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-green-500/20 rounded-full">
                        <Swords className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Team vs Team Battles</h3>
                        <p className="text-gray-400">Compete against other squads in intense 5v5 competitive matches.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-green-500/20 rounded-full">
                        <Flag className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Territory Control</h3>
                        <p className="text-gray-400">
                          Capture and hold strategic points to earn passive rewards for your team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/images/team-gameplay.jpg" alt="Team Gameplay" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">Team Tournaments</h3>
                    <p className="text-gray-300">
                      Monthly team championships with massive prize pools and exclusive rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Roles Section */}
          <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-1">SPECIALIZATIONS</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Team Roles</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Each team member can specialize in different roles with unique abilities and synergies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Tank",
                    description: "Absorb damage and protect teammates with defensive abilities",
                    abilities: ["Shield Wall", "Taunt", "Damage Reduction"],
                    synergy: "Healer",
                  },
                  {
                    name: "DPS",
                    description: "Deal high damage to enemies and objectives",
                    abilities: ["Critical Strike", "Area Damage", "Stealth"],
                    synergy: "Tank",
                  },
                  {
                    name: "Support",
                    description: "Heal allies and provide utility buffs to the team",
                    abilities: ["Healing Aura", "Speed Boost", "Resource Generation"],
                    synergy: "DPS",
                  },
                ].map((role, index) => (
                  <Card
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{role.name}</h3>
                      <p className="text-gray-300 mb-4">{role.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-green-400 mb-2">Key Abilities:</h4>
                        <ul className="space-y-1">
                          {role.abilities.map((ability, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                              {ability}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-900/20 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Best Synergy:</h4>
                        <p className="text-sm text-green-400">{role.synergy}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Team Dashboard Section */}
          <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Team Dashboard</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card
                    key={i}
                    className="bg-black/40 backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-1">Team Stats {i}</h3>
                      <p className="text-gray-400 text-sm mb-3">Performance metrics for team activities</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Wins: {i * 12}</span>
                        <span className="text-xs text-green-400">Rating: {i * 250} pts</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <GlowButton variant="green">View Team Details</GlowButton>
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
            <Image src="/images/team-hero.jpg" alt="Team Mode" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-1">TEAM MODE</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <AnimatedGradientText text="Strategic Team Play" />
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Form alliances, coordinate strategies, and dominate the battlefield together. Team-based gameplay with
            shared rewards and achievements.
          </p>
          <div className="flex flex-wrap gap-4">
            <GlowButton variant="cyan">Find Team</GlowButton>
            <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-950/50">
              Create Squad
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Team Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModeFeature
              icon={<Users className="h-6 w-6 text-green-400" />}
              title="Squad Formation"
              description="Create or join teams of 2-5 players with complementary skills."
              color="from-green-500/20 to-emerald-500/20"
            />

            <ModeFeature
              icon={<Shield className="h-6 w-6 text-green-400" />}
              title="Role Specialization"
              description="Choose specialized roles with unique abilities and synergies."
              color="from-green-500/20 to-emerald-500/20"
            />

            <ModeFeature
              icon={<Trophy className="h-6 w-6 text-green-400" />}
              title="Team Rankings"
              description="Climb the global team leaderboards and earn exclusive rewards."
              color="from-green-500/20 to-emerald-500/20"
            />
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-1">GAMEPLAY</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Coordinate to Dominate</h2>
              <p className="text-gray-300 mb-8">
                Team mode emphasizes coordination, strategy, and role specialization. Work together with your squad to
                complete objectives and overcome challenges that would be impossible alone.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-green-500/20 rounded-full">
                    <Target className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Objective-Based Missions</h3>
                    <p className="text-gray-400">
                      Complete strategic objectives that require teamwork and coordination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-green-500/20 rounded-full">
                    <Swords className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Team vs Team Battles</h3>
                    <p className="text-gray-400">Compete against other squads in intense 5v5 competitive matches.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-green-500/20 rounded-full">
                    <Flag className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Territory Control</h3>
                    <p className="text-gray-400">
                      Capture and hold strategic points to earn passive rewards for your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/team-gameplay.jpg" alt="Team Gameplay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">Team Tournaments</h3>
                <p className="text-gray-300">
                  Monthly team championships with massive prize pools and exclusive rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-1">SPECIALIZATIONS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Team Roles</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Each team member can specialize in different roles with unique abilities and synergies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tank",
                description: "Absorb damage and protect teammates with defensive abilities",
                abilities: ["Shield Wall", "Taunt", "Damage Reduction"],
                synergy: "Healer",
              },
              {
                name: "DPS",
                description: "Deal high damage to enemies and objectives",
                abilities: ["Critical Strike", "Area Damage", "Stealth"],
                synergy: "Tank",
              },
              {
                name: "Support",
                description: "Heal allies and provide utility buffs to the team",
                abilities: ["Healing Aura", "Speed Boost", "Resource Generation"],
                synergy: "DPS",
              },
            ].map((role, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{role.name}</h3>
                  <p className="text-gray-300 mb-4">{role.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-green-400 mb-2">Key Abilities:</h4>
                    <ul className="space-y-1">
                      {role.abilities.map((ability, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {ability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-900/20 p-3 rounded-lg">
                    <h4 className="text-sm font-medium mb-1">Best Synergy:</h4>
                    <p className="text-sm text-green-400">{role.synergy}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Dashboard Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Team Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className="bg-black/40 backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-1">Team Stats {i}</h3>
                  <p className="text-gray-400 text-sm mb-3">Performance metrics for team activities</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Wins: {i * 12}</span>
                    <span className="text-xs text-green-400">Rating: {i * 250} pts</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GlowButton variant="green">View Team Details</GlowButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
