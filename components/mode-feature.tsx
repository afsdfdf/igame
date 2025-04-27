import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ModeFeatureProps {
  icon: ReactNode
  title: string
  description: string
  color?: string
  className?: string
}

export default function ModeFeature({
  icon,
  title,
  description,
  color = "from-purple-500/20 to-blue-500/20",
  className,
}: ModeFeatureProps) {
  return (
    <Card
      className={cn(
        "bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(125,95,255,0.2)]",
        className,
      )}
    >
      <CardContent className="p-6">
        <div className={`p-3 rounded-full bg-gradient-to-r ${color} mb-4 w-fit`}>{icon}</div>

        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
