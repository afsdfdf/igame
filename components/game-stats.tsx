"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/animated-counter"
import { Users, Gamepad2, Coins, Award } from "lucide-react"

export default function GameStats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("game-stats")
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      label: "Active Players",
      value: 25000,
      suffix: "+",
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-cyan-400" />,
      label: "Games Played",
      value: 1500000,
      suffix: "+",
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: <Coins className="h-8 w-8 text-yellow-400" />,
      label: "SOL Earned",
      value: 50000,
      suffix: "+",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: <Award className="h-8 w-8 text-pink-400" />,
      label: "NFTs Minted",
      value: 75000,
      suffix: "+",
      color: "from-pink-500/20 to-rose-500/20",
    },
  ]

  return (
    <div id="game-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300"
        >
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className={`p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>{stat.icon}</div>

              <h3 className="text-3xl font-bold text-white mb-2">
                {isVisible ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : <>0{stat.suffix}</>}
              </h3>

              <p className="text-gray-400">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
