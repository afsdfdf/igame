"use client"

import { useEffect, useState } from "react"

export default function FloatingNFT() {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation({
        x: Math.sin(Date.now() / 2000) * 10,
        y: Math.cos(Date.now() / 3000) * 15,
        z: Math.sin(Date.now() / 4000) * 5,
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const nfts = [
    { id: 1, name: "Cosmic Guardian", rarity: "Legendary" },
    { id: 2, name: "Digital Warrior", rarity: "Epic" },
    { id: 3, name: "Cyber Mage", rarity: "Rare" },
    { id: 4, name: "Neon Assassin", rarity: "Epic" },
  ]

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {nfts.map((nft, index) => (
            <div
              key={nft.id}
              className="absolute w-48 h-48 rounded-lg overflow-hidden border-2 border-purple-500 shadow-[0_0_30px_rgba(125,95,255,0.4)]"
              style={{
                top: `${50 + Math.sin(Date.now() / 2000 + index * 1.5) * 20}%`,
                left: `${50 + Math.cos(Date.now() / 2500 + index * 1.5) * 20}%`,
                transform: `translate(-50%, -50%) 
                            rotateX(${rotation.x + index * 5}deg) 
                            rotateY(${rotation.y + index * 5}deg) 
                            rotateZ(${rotation.z + index * 2}deg)`,
                zIndex: 10 - index,
                transition: "transform 0.5s ease-out",
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 p-0.5">
                <div className="w-full h-full bg-black p-2 flex flex-col">
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">
                      {nft.name} NFT
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-white">{nft.name}</span>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded ${
                        nft.rarity === "Legendary"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : nft.rarity === "Epic"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-blue-500/20 text-blue-300"
                      }`}
                    >
                      {nft.rarity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-purple-500/10 animate-pulse filter blur-xl"></div>
      </div>
    </div>
  )
}
