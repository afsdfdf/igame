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
    image: "/images/nft-badge1.jpg",
    description: "Grants +15% earnings in all game modes",
    attributes: ["Animated", "Boosts Earnings", "Limited Edition"],
  },
  {
    id: 2,
    name: "Digital Warrior",
    rarity: "Epic",
    image: "/images/nft-badge2.jpg",
    description: "Unlocks exclusive PVP tournaments",
    attributes: ["Animated", "Tournament Access", "Special Effects"],
  },
  {
    id: 3,
    name: "Cyber Mage",
    rarity: "Rare",
    image: "/images/nft-badge3.jpg",
    description: "Provides special abilities in adventure mode",
    attributes: ["Skill Boost", "Custom Animation", "Tradeable"],
  },
  {
    id: 4,
    name: "Neon Assassin",
    rarity: "Epic",
    image: "/images/nft-badge4.jpg",
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
      {/* Featured NFT */}
      <div className="relative">
        <Card
          className={cn(
            "overflow-hidden border-2 bg-black/40 backdrop-blur-sm h-[500px]",
            `border-${activeNft.rarity === "Legendary" ? "yellow" : activeNft.rarity === "Epic" ? "purple" : "blue"}-500`,
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
          <div className="absolute inset-0">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse filter blur-xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                    {activeNft.name} NFT
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CardContent className="relative z-20 h-full flex flex-col justify-end p-8">
            <Badge className={cn("self-start mb-4 bg-gradient-to-r", getRarityColor(activeNft.rarity))}>
              {activeNft.rarity}
            </Badge>
            <h3 className="text-3xl font-bold mb-2 text-white">{activeNft.name}</h3>
            <p className="text-gray-300 mb-6">{activeNft.description}</p>

            <div className="flex flex-wrap gap-2">
              {activeNft.attributes.map((attr, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                  {attr}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-2 gap-4">
        {nfts.map((nft) => (
          <Card
            key={nft.id}
            className={cn(
              "overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:scale-105",
              activeNft.id === nft.id
                ? `border-${nft.rarity === "Legendary" ? "yellow" : nft.rarity === "Epic" ? "purple" : "blue"}-500`
                : "border-gray-800",
              "bg-black/40 backdrop-blur-sm",
            )}
            onClick={() => setActiveNft(nft)}
          >
            <div className="relative h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
              <div className="absolute inset-0">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                    {nft.name}
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="relative z-20 p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-white">{nft.name}</h4>
                <Badge className={cn("bg-gradient-to-r", getRarityColor(nft.rarity))}>{nft.rarity}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
