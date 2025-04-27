import type { ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface GameModeCardProps {
  title: string
  icon: ReactNode
  description: string
  color: string
  image: string
}

export default function GameModeCard({ title, icon, description, color, image }: GameModeCardProps) {
  return (
    <Card className="group overflow-hidden border-0 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] sm:hover:scale-105 hover:shadow-[0_0_30px_rgba(125,95,255,0.3)] h-full">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/30 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
      </div>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
