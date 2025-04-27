import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface RewardCardProps {
  title: string
  description: string
  image: string
  reward: string
}

export default function RewardCard({ title, description, image, reward }: RewardCardProps) {
  return (
    <Card className="group overflow-hidden border-0 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 flex items-center justify-center text-sm text-cyan-400">{title}</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/60 to-orange-600/60 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg">
          <span className="text-yellow-300 font-medium">Reward</span>
          <span className="text-white">{reward}</span>
        </div>

        <div className="mt-4 flex justify-end">
          <span className="text-yellow-400 flex items-center text-sm group-hover:underline">
            View Details <ArrowRight className="ml-1 h-3 w-3" />
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
