"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Map, Compass, Scroll, Footprints, Gem } from "lucide-react"
import ModeFeature from "@/components/mode-feature"
import GlowButton from "@/components/glow-button"
import AnimatedGradientText from "@/components/animated-gradient-text"
import Footer from "@/components/footer"
import { useDevice } from "@/hooks/useDevice"
import { MobilePageWrapper } from "@/components/mobile-page-wrapper"
import MobileModePage from "@/components/mobile-mode-page"

export default function AdventureModePage() {
  const { isMobile } = useDevice()

  if (isMobile) {
    return (
      <MobilePageWrapper
        mobileContent={
          <>
            <MobileModePage
              title="冒险副本"
              description="踏上程序生成世界的史诗之旅。发现隐藏的宝藏，完成任务，揭开 AIGAME 宇宙的秘密。"
              heroImage="/images/adventure-hero.jpg"
              badgeColor="bg-purple-700 hover:bg-purple-800"
              features={[
                {
                  icon: <Map className="h-6 w-6 text-purple-400" />,
                  title: "程序生成世界",
                  description: "每次冒险都在独特生成的世界中进行，带来不同的挑战。"
                },
                {
                  icon: <Scroll className="h-6 w-6 text-purple-400" />,
                  title: "任务系统",
                  description: "完成主线和支线任务，获得特殊奖励并解锁新区域。"
                },
                {
                  icon: <Gem className="h-6 w-6 text-purple-400" />,
                  title: "寻宝探险",
                  description: "发现散布在世界各地的隐藏宝藏和稀有 NFT。"
                }
              ]}
              gameplayImage="/images/adventure-gameplay.jpg"
              gameplayTitle="沉浸式探索"
              gameplayDescription="冒险模式提供丰富的沉浸式体验，你可以探索广阔的景观，与 NPC 互动，揭开 AIGAME 宇宙的传说。"
              gameplayFeatures={[
                {
                  icon: <Compass className="h-5 w-5 text-purple-400" />,
                  title: "动态世界",
                  description: "世界会根据你的行动和选择而变化，创造独特的体验。"
                },
                {
                  icon: <Footprints className="h-5 w-5 text-purple-400" />,
                  title: "多重路径",
                  description: "选择你自己的冒险，体验分支剧情和多种结局。"
                },
                {
                  icon: <Mountain className="h-5 w-5 text-purple-400" />,
                  title: "多样环境",
                  description: "探索森林、山脉、沙漠和神秘遗迹，每个环境都有独特的挑战。"
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
                <Image src="/images/adventure-hero.jpg" alt="Adventure Mode" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">ADVENTURE MODE</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <AnimatedGradientText text="Explore & Discover" />
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Embark on epic journeys through procedurally generated worlds. Discover hidden treasures, complete quests,
                and uncover the secrets of the AIGAME universe.
              </p>
              <div className="flex flex-wrap gap-4">
                <GlowButton variant="purple">Start Adventure</GlowButton>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50">
                  View Maps
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Adventure Features</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ModeFeature
                  icon={<Map className="h-6 w-6 text-purple-400" />}
                  title="Procedural Worlds"
                  description="Every adventure takes place in a uniquely generated world with different challenges."
                  color="from-purple-500/20 to-indigo-500/20"
                />

                <ModeFeature
                  icon={<Scroll className="h-6 w-6 text-purple-400" />}
                  title="Quest System"
                  description="Complete main and side quests to earn special rewards and unlock new areas."
                  color="from-purple-500/20 to-indigo-500/20"
                />

                <ModeFeature
                  icon={<Gem className="h-6 w-6 text-purple-400" />}
                  title="Treasure Hunting"
                  description="Discover hidden treasures and rare NFTs scattered throughout the world."
                  color="from-purple-500/20 to-indigo-500/20"
                />
              </div>
            </div>
          </section>

          {/* Gameplay Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">GAMEPLAY</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Immersive Exploration</h2>
                  <p className="text-gray-300 mb-8">
                    Adventure mode offers a rich, immersive experience where you can explore vast landscapes, interact with
                    NPCs, and uncover the lore of the AIGAME universe.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-purple-500/20 rounded-full">
                        <Compass className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Dynamic World</h3>
                        <p className="text-gray-400">
                          The world changes based on your actions and choices, creating a unique experience.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-purple-500/20 rounded-full">
                        <Footprints className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Multiple Paths</h3>
                        <p className="text-gray-400">
                          Choose your own adventure with branching storylines and multiple endings.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-purple-500/20 rounded-full">
                        <Mountain className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Diverse Environments</h3>
                        <p className="text-gray-400">
                          Explore forests, mountains, deserts, and mysterious ruins, each with unique challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image src="/images/adventure-gameplay.jpg" alt="Adventure Gameplay" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">World Exploration</h3>
                    <p className="text-gray-300">
                      Discover hidden locations and unlock special rewards for thorough exploration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Maps Section */}
          <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">MAPS</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Adventure Realms</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Explore diverse realms, each with unique environments, challenges, and rewards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Crystal Caverns",
                    difficulty: "Medium",
                    rewards: "Gem NFTs, Rare Materials",
                    description: "A vast network of underground caves filled with glowing crystals and hidden treasures.",
                  },
                  {
                    name: "Skyward Peaks",
                    difficulty: "Hard",
                    rewards: "Legendary Equipment, SOL Bonuses",
                    description: "Treacherous mountain ranges with challenging terrain and powerful guardians.",
                  },
                  {
                    name: "Forgotten Ruins",
                    difficulty: "Expert",
                    rewards: "Ancient Artifacts, Exclusive NFTs",
                    description: "The remains of an ancient civilization with complex puzzles and valuable relics.",
                  },
                ].map((map, index) => (
                  <Card
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0">
                        <div className="w-full h-full relative">
                          <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                            {map.name}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 opacity-70"></div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`
                          ${
                            map.difficulty === "Expert"
                              ? "bg-red-500/20 text-red-300"
                              : map.difficulty === "Hard"
                                ? "bg-orange-500/20 text-orange-300"
                                : "bg-yellow-500/20 text-yellow-300"
                          }
                        `}
                        >
                          {map.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{map.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{map.description}</p>

                      <div className="bg-purple-900/20 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-300">Rewards:</span>
                          <span className="text-sm text-purple-300">{map.rewards}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <GlowButton variant="purple">View All Maps</GlowButton>
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
            <Image src="/images/adventure-hero.jpg" alt="Adventure Mode" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">ADVENTURE MODE</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <AnimatedGradientText text="Explore & Discover" />
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Embark on epic journeys through procedurally generated worlds. Discover hidden treasures, complete quests,
            and uncover the secrets of the AIGAME universe.
          </p>
          <div className="flex flex-wrap gap-4">
            <GlowButton variant="purple">Start Adventure</GlowButton>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50">
              View Maps
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Adventure Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModeFeature
              icon={<Map className="h-6 w-6 text-purple-400" />}
              title="Procedural Worlds"
              description="Every adventure takes place in a uniquely generated world with different challenges."
              color="from-purple-500/20 to-indigo-500/20"
            />

            <ModeFeature
              icon={<Scroll className="h-6 w-6 text-purple-400" />}
              title="Quest System"
              description="Complete main and side quests to earn special rewards and unlock new areas."
              color="from-purple-500/20 to-indigo-500/20"
            />

            <ModeFeature
              icon={<Gem className="h-6 w-6 text-purple-400" />}
              title="Treasure Hunting"
              description="Discover hidden treasures and rare NFTs scattered throughout the world."
              color="from-purple-500/20 to-indigo-500/20"
            />
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">GAMEPLAY</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Immersive Exploration</h2>
              <p className="text-gray-300 mb-8">
                Adventure mode offers a rich, immersive experience where you can explore vast landscapes, interact with
                NPCs, and uncover the lore of the AIGAME universe.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-purple-500/20 rounded-full">
                    <Compass className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Dynamic World</h3>
                    <p className="text-gray-400">
                      The world changes based on your actions and choices, creating a unique experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-purple-500/20 rounded-full">
                    <Footprints className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Multiple Paths</h3>
                    <p className="text-gray-400">
                      Choose your own adventure with branching storylines and multiple endings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-purple-500/20 rounded-full">
                    <Mountain className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Diverse Environments</h3>
                    <p className="text-gray-400">
                      Explore forests, mountains, deserts, and mysterious ruins, each with unique challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/adventure-gameplay.jpg" alt="Adventure Gameplay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">World Exploration</h3>
                <p className="text-gray-300">
                  Discover hidden locations and unlock special rewards for thorough exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-700 hover:bg-purple-800 text-white px-4 py-1">MAPS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Adventure Realms</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore diverse realms, each with unique environments, challenges, and rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Crystal Caverns",
                difficulty: "Medium",
                rewards: "Gem NFTs, Rare Materials",
                description: "A vast network of underground caves filled with glowing crystals and hidden treasures.",
              },
              {
                name: "Skyward Peaks",
                difficulty: "Hard",
                rewards: "Legendary Equipment, SOL Bonuses",
                description: "Treacherous mountain ranges with challenging terrain and powerful guardians.",
              },
              {
                name: "Forgotten Ruins",
                difficulty: "Expert",
                rewards: "Ancient Artifacts, Exclusive NFTs",
                description: "The remains of an ancient civilization with complex puzzles and valuable relics.",
              },
            ].map((map, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0">
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                        {map.name}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 opacity-70"></div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`
                      ${
                        map.difficulty === "Expert"
                          ? "bg-red-500/20 text-red-300"
                          : map.difficulty === "Hard"
                            ? "bg-orange-500/20 text-orange-300"
                            : "bg-yellow-500/20 text-yellow-300"
                      }
                    `}
                    >
                      {map.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{map.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{map.description}</p>

                  <div className="bg-purple-900/20 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Rewards:</span>
                      <span className="text-sm text-purple-300">{map.rewards}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GlowButton variant="purple">View All Maps</GlowButton>
          </div>
        </div>
      </section>
    </main>
  )
}
