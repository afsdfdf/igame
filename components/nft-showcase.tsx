"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const nfts = [
  {
    id: 1,
    name: "Cosmic Guardian",
    rarity: "Legendary",
    image: "/images/CosmicGuardian.png",
    description: "Grants +15% earnings in all game modes",
    attributes: ["Animated", "Boosts Earnings", "Limited Edition"],
  },
  {
    id: 2,
    name: "Digital Warrior",
    rarity: "Epic",
    image: "/images/DigitalWarrior.png",
    description: "Unlocks exclusive PVP tournaments",
    attributes: ["Animated", "Tournament Access", "Special Effects"],
  },
  {
    id: 3,
    name: "Cyber Mage",
    rarity: "Rare",
    image: "/images/CyberMage.png",
    description: "Provides special abilities in adventure mode",
    attributes: ["Skill Boost", "Custom Animation", "Tradeable"],
  },
  {
    id: 4,
    name: "Neon Assassin",
    rarity: "Epic",
    image: "/images/NeonAssassin.png",
    description: "Unlocks hidden areas in all game modes",
    attributes: ["Area Access", "Glowing Effect", "Tradeable"],
  },
]

export default function NFTShowcase() {
  const [activeNft, setActiveNft] = useState(nfts[0])

  const rarityColors = {
    Legendary: "from-yellow-500 to-orange-500 text-yellow-300 border-yellow-500",
    Epic: "from-purple-500 to-pink-500 text-purple-300 border-purple-500",
    Rare: "from-blue-500 to-cyan-500 text-blue-300 border-blue-500",
    Uncommon: "from-green-500 to-emerald-500 text-green-300 border-green-500",
    Common: "from-gray-500 to-slate-500 text-gray-300 border-gray-500",
  }

  const getRarityColor = (rarity: string) => {
    return rarityColors[rarity as keyof typeof rarityColors] || rarityColors.Common
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Featured NFT - 大图显示 */}
      <div className="relative bg-gray-900 rounded-xl overflow-hidden border-2 border-yellow-500 shadow-xl h-[500px]">
        <div className="flex flex-col h-full">
          {/* 主图片区 - 填充并裁剪 */}
          <div className="flex-1 relative overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[320px] h-[320px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-50 blur-md animate-pulse"></div>
                <img
                  src={activeNft.image}
                  alt={activeNft.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-[0_0_15px_rgba(123,104,238,0.6)] transition-transform duration-700 hover:scale-105 z-10"
                />
              </div>
            </div>
          </div>

          {/* 信息区 */}
          <div className="mt-auto px-4">
            <Badge className={`mb-2 bg-gradient-to-r ${getRarityColor(activeNft.rarity)} shadow-lg`}>
              {activeNft.rarity}
            </Badge>
            <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{activeNft.name}</h3>
            <p className="text-gray-300 mb-4">{activeNft.description}</p>
            <div className="flex flex-wrap gap-2">
              {activeNft.attributes.map((attr, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
                  {attr}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NFT Grid - 小卡片 */}
      <div className="grid grid-cols-2 gap-4">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className={`bg-gray-900 rounded-xl overflow-hidden ${
              activeNft.id === nft.id 
                ? "border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                : "border-2 border-gray-800"
            } cursor-pointer hover:border-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all duration-300`}
            onClick={() => setActiveNft(nft)}
          >
            {/* 小图片区 - 填充并裁剪 */}
            <div className="h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10"></div>
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
            </div>
            <div className="p-3">
              <h4 className="font-medium text-white text-center">{nft.name}</h4>
              <div className="flex justify-center mt-2">
                <Badge className={`bg-gradient-to-r ${getRarityColor(nft.rarity)} shadow-sm`}>{nft.rarity}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
