"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dice5, ArrowLeft, Gift, Package, Sparkles } from "lucide-react"
import { useDevice } from "@/hooks/useDevice"
import { MobilePageWrapper } from "@/components/mobile-page-wrapper"
import MobileModePage from "@/components/mobile-mode-page"
import Footer from "@/components/footer"

export default function LuckyModePage() {
  const { isMobile } = useDevice()
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  if (isMobile) {
    return (
      <MobilePageWrapper
        mobileContent={
          <>
            <MobileModePage
              title="幸运副本"
              description="每日链上抽奖，盲盒NFT开出稀有资产，概率透明上链，公平公正。"
              heroImage="/images/lucky-hero.jpg"
              badgeColor="bg-[#7D5FFF] hover:bg-[#7D5FFF]/80"
              features={[
                {
                  icon: <Dice5 className="h-6 w-6 text-[#00FFF0]" />,
                  title: "每日抽奖",
                  description: "每天一次免费抽奖机会，开启盲盒NFT。"
                },
                {
                  icon: <Package className="h-6 w-6 text-[#00FFF0]" />,
                  title: "盲盒NFT",
                  description: "开出稀有资产，可以在市场上交易。"
                },
                {
                  icon: <Sparkles className="h-6 w-6 text-[#00FFF0]" />,
                  title: "概率透明",
                  description: "所有概率都透明上链，确保公平公正。"
                }
              ]}
              gameplayImage="/images/lucky-gameplay.jpg"
              gameplayTitle="链上抽奖系统"
              gameplayDescription="幸运副本是AIGAME平台上最具惊喜性的游戏模式。每天，您都可以参与链上抽奖，开启盲盒NFT，有机会获得稀有资产。"
              gameplayFeatures={[
                {
                  icon: <Dice5 className="h-5 w-5 text-[#00FFF0]" />,
                  title: "每日抽奖",
                  description: "每天一次免费抽奖机会，开启盲盒NFT。"
                },
                {
                  icon: <Package className="h-5 w-5 text-[#00FFF0]" />,
                  title: "盲盒NFT",
                  description: "开出稀有资产，可以在市场上交易。"
                },
                {
                  icon: <Sparkles className="h-5 w-5 text-[#00FFF0]" />,
                  title: "概率透明",
                  description: "所有概率都透明上链，确保公平公正。"
                }
              ]}
            />
          </>
        }
      >
        <div className="min-h-screen bg-gradient-to-b from-[#0F0B1F] to-[#1A1333] text-white">
          {/* 英雄区 */}
          <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image src="/images/lucky-hero.jpg" alt="幸运副本" fill className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B1F]/70 to-[#1A1333]"></div>
            </div>

            <div className="relative z-10 container px-4 md:px-6 text-center">
              <Link href="/" className="inline-flex items-center text-[#00FFF0] mb-6 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首页
              </Link>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Badge className="bg-[#7D5FFF] hover:bg-[#7D5FFF]/80 mb-4">幸运副本</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                  每日<span className="text-[#00FFF0]">链上</span>抽奖
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-300">盲盒NFT开出稀有资产，概率透明上链，公平公正</p>
              </motion.div>
            </div>
          </section>

          {/* 主要内容 */}
          <section className="container px-4 md:px-6 py-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div variants={itemVariant} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#00FFF0]">幸运副本介绍</h2>
                <p className="text-gray-300">
                  幸运副本是AIGAME平台上最具惊喜性的游戏模式。每天，您都可以参与链上抽奖，开启盲盒NFT，有机会获得稀有资产。
                </p>
                <p className="text-gray-300">
                  我们的抽奖系统完全基于链上智能合约，所有概率都透明上链，确保抽奖过程的公平公正。每个盲盒都是独特的NFT，可以在市场上交易。
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#2A1F4A]/50 rounded-lg p-4 flex flex-col items-center text-center">
                    <Dice5 className="h-8 w-8 text-[#00FFF0] mb-2" />
                    <h3 className="font-medium">每日抽奖</h3>
                    <p className="text-xs text-gray-400">每天一次免费抽奖机会</p>
                  </div>
                  <div className="bg-[#2A1F4A]/50 rounded-lg p-4 flex flex-col items-center text-center">
                    <Package className="h-8 w-8 text-[#00FFF0] mb-2" />
                    <h3 className="font-medium">盲盒NFT</h3>
                    <p className="text-xs text-gray-400">开出稀有资产</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariant} className="relative rounded-xl overflow-hidden h-[300px] md:h-auto">
                <Image src="/images/lucky-gameplay.jpg" alt="幸运副本游戏画面" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1333] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-sm text-white/80">链上抽奖系统</p>
                </div>
              </motion.div>
            </motion.div>

            {/* 盲盒类型展示 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#00FFF0] mb-6">盲盒类型</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "普通盲盒",
                    description: "每日免费获得，有机会开出普通到稀有资产",
                    image: "/images/box1.jpg",
                    icon: <Package className="h-6 w-6" />,
                  },
                  {
                    title: "高级盲盒",
                    description: "使用游戏代币购买，提高获得稀有资产的概率",
                    image: "/images/box2.jpg",
                    icon: <Gift className="h-6 w-6" />,
                  },
                  {
                    title: "传奇盲盒",
                    description: "限量发售，保证获得史诗或传奇资产",
                    image: "/images/box3.jpg",
                    icon: <Sparkles className="h-6 w-6" />,
                  },
                ].map((box, index) => (
                  <Card key={index} className="bg-[#2A1F4A]/70 border-[#7D5FFF]/20 text-white overflow-hidden group">
                    <div className="relative h-48">
                      <Image
                        src={box.image || "/placeholder.svg"}
                        alt={box.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1333] to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-[#7D5FFF]/20 text-[#00FFF0] mr-3">{box.icon}</div>
                          <h3 className="text-lg font-bold">{box.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-300">{box.description}</p>
                      <Button variant="link" className="text-[#00FFF0] p-0 mt-2 h-auto">
                        查看详情
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* 概率展示 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#00FFF0] mb-6">概率透明上链</h2>
              <div className="bg-[#2A1F4A]/30 border border-[#7D5FFF]/20 rounded-xl p-6">
                <p className="text-gray-300 mb-6">
                  我们的抽奖系统完全基于链上智能合约，所有概率都透明上链，确保抽奖过程的公平公正。您可以在Solana区块链上查询验证每次抽奖的结果和概率。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-[#1A1333]/70 border-[#7D5FFF]/20 text-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">普通盲盒概率</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>普通资产</span>
                          <span className="text-[#00FFF0]">70%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>稀有资产</span>
                          <span className="text-[#00FFF0]">25%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>史诗资产</span>
                          <span className="text-[#00FFF0]">4%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>传奇资产</span>
                          <span className="text-[#00FFF0]">1%</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#1A1333]/70 border-[#7D5FFF]/20 text-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">高级盲盒概率</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>普通资产</span>
                          <span className="text-[#00FFF0]">50%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>稀有资产</span>
                          <span className="text-[#00FFF0]">35%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>史诗资产</span>
                          <span className="text-[#00FFF0]">12%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>传奇资产</span>
                          <span className="text-[#00FFF0]">3%</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#1A1333]/70 border-[#7D5FFF]/20 text-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">传奇盲盒概率</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>普通资产</span>
                          <span className="text-[#00FFF0]">0%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>稀有资产</span>
                          <span className="text-[#00FFF0]">20%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>史诗资产</span>
                          <span className="text-[#00FFF0]">60%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>传奇资产</span>
                          <span className="text-[#00FFF0]">20%</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </MobilePageWrapper>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0B1F] to-[#1A1333] text-white">
      {/* 英雄区 */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/lucky-hero.jpg" alt="幸运副本" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B1F]/70 to-[#1A1333]"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6 text-center">
          <Link href="/" className="inline-flex items-center text-[#00FFF0] mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Badge className="bg-[#7D5FFF] hover:bg-[#7D5FFF]/80 mb-4">幸运副本</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              每日<span className="text-[#00FFF0]">链上</span>抽奖
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">盲盒NFT开出稀有资产，概率透明上链，公平公正</p>
          </motion.div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="container px-4 md:px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={itemVariant} className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00FFF0]">幸运副本介绍</h2>
            <p className="text-gray-300">
              幸运副本是AIGAME平台上最具惊喜性的游戏模式。每天，您都可以参与链上抽奖，开启盲盒NFT，有机会获得稀有资产。
            </p>
            <p className="text-gray-300">
              我们的抽奖系统完全基于链上智能合约，所有概率都透明上链，确保抽奖过程的公平公正。每个盲盒都是独特的NFT，可以在市场上交易。
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#2A1F4A]/50 rounded-lg p-4 flex flex-col items-center text-center">
                <Dice5 className="h-8 w-8 text-[#00FFF0] mb-2" />
                <h3 className="font-medium">每日抽奖</h3>
                <p className="text-xs text-gray-400">每天一次免费抽奖机会</p>
              </div>
              <div className="bg-[#2A1F4A]/50 rounded-lg p-4 flex flex-col items-center text-center">
                <Package className="h-8 w-8 text-[#00FFF0] mb-2" />
                <h3 className="font-medium">盲盒NFT</h3>
                <p className="text-xs text-gray-400">开出稀有资产</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="relative rounded-xl overflow-hidden h-[300px] md:h-auto">
            <Image src="/images/lucky-gameplay.jpg" alt="幸运副本游戏画面" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1333] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <p className="text-sm text-white/80">链上抽奖系统</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 盲盒类型展示 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#00FFF0] mb-6">盲盒类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "普通盲盒",
                description: "每日免费获得，有机会开出普通到稀有资产",
                image: "/images/box1.jpg",
                icon: <Package className="h-6 w-6" />,
              },
              {
                title: "高级盲盒",
                description: "使用游戏代币购买，提高获得稀有资产的概率",
                image: "/images/box2.jpg",
                icon: <Gift className="h-6 w-6" />,
              },
              {
                title: "传奇盲盒",
                description: "限量发售，保证获得史诗或传奇资产",
                image: "/images/box3.jpg",
                icon: <Sparkles className="h-6 w-6" />,
              },
            ].map((box, index) => (
              <Card key={index} className="bg-[#2A1F4A]/70 border-[#7D5FFF]/20 text-white overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={box.image || "/placeholder.svg"}
                    alt={box.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1333] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-[#7D5FFF]/20 text-[#00FFF0] mr-3">{box.icon}</div>
                      <h3 className="text-lg font-bold">{box.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-300">{box.description}</p>
                  <Button variant="link" className="text-[#00FFF0] p-0 mt-2 h-auto">
                    查看详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* 概率展示 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#00FFF0] mb-6">概率透明上链</h2>
          <div className="bg-[#2A1F4A]/30 border border-[#7D5FFF]/20 rounded-xl p-6">
            <p className="text-gray-300 mb-6">
              我们的抽奖系统完全基于链上智能合约，所有概率都透明上链，确保抽奖过程的公平公正。您可以在Solana区块链上查询验证每次抽奖的结果和概率。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#1A1333]/70 border-[#7D5FFF]/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">普通盲盒概率</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>普通资产</span>
                      <span className="text-[#00FFF0]">70%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>稀有资产</span>
                      <span className="text-[#00FFF0]">25%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>史诗资产</span>
                      <span className="text-[#00FFF0]">4%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>传奇资产</span>
                      <span className="text-[#00FFF0]">1%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1333]/70 border-[#7D5FFF]/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">高级盲盒概率</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>普通资产</span>
                      <span className="text-[#00FFF0]">50%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>稀有资产</span>
                      <span className="text-[#00FFF0]">35%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>史诗资产</span>
                      <span className="text-[#00FFF0]">12%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>传奇资产</span>
                      <span className="text-[#00FFF0]">3%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1333]/70 border-[#7D5FFF]/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">传奇盲盒概率</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>普通资产</span>
                      <span className="text-[#00FFF0]">0%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>稀有资产</span>
                      <span className="text-[#00FFF0]">20%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>史诗资产</span>
                      <span className="text-[#00FFF0]">60%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>传奇资产</span>
                      <span className="text-[#00FFF0]">20%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
